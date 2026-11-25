import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CartList from '../components/cart/CartList';
import CartSummary from '../components/cart/CartSummary';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="fade-in" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <div
          style={{
            backgroundColor: 'var(--white)',
            padding: '3.5rem 2rem',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '620px',
            margin: '0 auto',
            border: '1px dashed var(--border)'
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              backgroundColor: 'rgba(1, 50, 48, 0.08)',
              color: 'var(--primary)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}
          >
            <ShoppingBag size={34} />
          </div>
          <h2 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.65rem', fontWeight: '800' }}>
            Giỏ hàng của bạn đang trống
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', lineHeight: '1.6' }}>
            Hãy ghé qua thực đơn để lựa chọn những món ăn thơm ngon và gửi đơn trực tiếp tới bộ phận bếp nhé!
          </p>
          <Link to="/menu">
            <Button variant="accent" size="lg" icon={<ArrowLeft size={18} />}>
              Xem thực đơn chọn món
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ padding: '0.5rem 0' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1
          style={{
            color: 'var(--primary)',
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '0.4rem'
          }}
        >
          🛒 Giỏ Hàng Của Bạn
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Bạn đang có <strong>{totalItems}</strong> món ăn trong giỏ hàng
        </p>
      </div>

      <div className="cart-grid">
        <div style={{ minWidth: 0 }}>
          <CartList
            items={cartItems}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
            onRemove={removeFromCart}
          />
        </div>

        <div>
          <CartSummary
            items={cartItems}
            totalItems={totalItems}
            totalPrice={totalPrice}
            onClearCart={clearCart}
          />
        </div>
      </div>
    </div>
  );
}
