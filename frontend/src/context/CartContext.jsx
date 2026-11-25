import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CART_STORAGE_KEY = 'velora_dine_cart';

// Đảm bảo dữ liệu giỏ hàng hợp lệ, không bao giờ phát sinh số lượng âm hoặc NaN
function sanitizeCartItems(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (item) =>
        item &&
        item.id !== undefined &&
        item.id !== null &&
        typeof item.name === 'string'
    )
    .map((item) => {
      const parsedQty = Math.floor(Number(item.quantity));
      const parsedPrice = Number(item.price);
      return {
        ...item,
        price: Number.isFinite(parsedPrice) && parsedPrice >= 0 ? parsedPrice : 0,
        quantity: Number.isFinite(parsedQty) ? parsedQty : 0
      };
    })
    .filter((item) => item.quantity > 0);
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (!saved) return [];
    return sanitizeCartItems(JSON.parse(saved));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);
  const [toastMessage, setToastMessage] = useState('');

  // Lưu giỏ hàng vào localStorage mỗi khi thay đổi
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Bỏ qua nếu trình duyệt chặn localStorage
    }
  }, [cartItems]);

  // Đồng bộ giỏ hàng nếu người dùng mở nhiều tab trình duyệt
  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === CART_STORAGE_KEY) {
        setCartItems(loadCartFromStorage());
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(''), 2200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const addToCart = (item, qtyToAdd = 1) => {
    const safeAdd = Math.max(1, Math.floor(Number(qtyToAdd) || 1));
    if (!item || item.id === undefined || item.id === null) return;

    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + safeAdd } : i
        );
      }
      const safePrice = Number(item.price);
      return [
        ...prev,
        {
          ...item,
          price: Number.isFinite(safePrice) && safePrice >= 0 ? safePrice : 0,
          quantity: safeAdd
        }
      ];
    });
    showToast(`Đã thêm "${item.name}" vào giỏ hàng`);
  };

  const updateQuantity = (id, newQuantity) => {
    const safeQty = Math.floor(Number(newQuantity));
    if (!Number.isFinite(safeQty) || safeQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: safeQty } : item
      )
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + 1) } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemQuantity = (id) => {
    const found = cartItems.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  // Công thức: Tổng số lượng & Tổng tiền = Tổng của (Giá món × Số lượng)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        getItemQuantity
      }}
    >
      {children}

      {/* Thông báo nhanh khi thêm món vào giỏ */}
      {toastMessage && (
        <div
          className="fade-in"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
            padding: '0.85rem 1.25rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            borderLeft: '4px solid var(--accent)',
            fontSize: '0.925rem',
            fontWeight: '600',
            zIndex: 1000
          }}
        >
          ✓ {toastMessage}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
