import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import TrackingPage from './pages/TrackingPage';
import KitchenDashboard from './pages/KitchenDashboard';
import NotFoundPage from './pages/NotFoundPage';

function CheckoutPlaceholder() {
  return (
    <div className="fade-in" style={{ padding: '2rem 0', textAlign: 'center' }}>
      <div
        style={{
          backgroundColor: 'var(--white)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          maxWidth: '620px',
          margin: '0 auto'
        }}
      >
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.75rem' }}>
          Trang Xác Nhận Đặt Món (Checkout)
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>
          Trang nhập thông tin khách hàng và gửi đơn hàng sẽ được hoàn thiện trong <strong>Ngày 8 & Ngày 9</strong>.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPlaceholder />} />
            <Route path="/tracking" element={<TrackingPage />} />
            <Route path="/tracking/:id" element={<TrackingPage />} />
            <Route path="/kitchen" element={<KitchenDashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
