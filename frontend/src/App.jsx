import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2.5rem' }}>
        🍽️ Hệ Thống Đặt Món & Xử Lý Tại Bếp
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Đề tài 04 - Phát triển ứng dụng phân tán (.NET 10 / ReactJS / RabbitMQ / Realtime)
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link
          to="/menu"
          style={{
            backgroundColor: 'var(--accent)',
            color: 'var(--white)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: '600'
          }}
        >
          Xem Thực Đơn
        </Link>
        <Link
          to="/kitchen"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: '600'
          }}
        >
          Màn Hình Bếp (Kitchen Dashboard)
        </Link>
      </div>
    </div>
  );
}

function MenuPlaceholder() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary)' }}>Trang Thực Đơn (Menu Page)</h2>
      <p style={{ color: 'var(--text-muted)' }}>Sẽ được hoàn thiện vào Ngày 3 & 4</p>
    </div>
  );
}

function KitchenPlaceholder() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ color: 'var(--primary)' }}>Kitchen Dashboard</h2>
      <p style={{ color: 'var(--text-muted)' }}>Màn hình xử lý bếp - Sẽ được hoàn thiện vào Ngày 11 & 12</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          backgroundColor: 'var(--primary)',
          color: 'var(--white)',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#fff' }}>
          🍴 DINE & KITCHEN
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: '#fff' }}>Trang chủ</Link>
          <Link to="/menu" style={{ color: '#fff' }}>Thực đơn</Link>
          <Link to="/kitchen" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Bếp</Link>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPlaceholder />} />
          <Route path="/kitchen" element={<KitchenPlaceholder />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
