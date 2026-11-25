import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function CartPage() {
  return (
    <div className="fade-in" style={{ padding: '2rem 0', textAlign: 'center' }}>
      <div
        style={{
          backgroundColor: 'var(--white)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          maxWidth: '680px',
          margin: '0 auto'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(1, 50, 48, 0.1)',
            color: 'var(--primary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}
        >
          <ShoppingBag size={30} />
        </div>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.75rem' }}>
          Giỏ Hàng Của Bạn
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Chức năng giỏ hàng, CartContext, tăng giảm số lượng và tính tiền sẽ được tích hợp vào <strong>Ngày 5 & Ngày 6</strong>.
        </p>
        <Link to="/menu">
          <Button variant="accent" size="md">
            Xem thực đơn chọn món
          </Button>
        </Link>
      </div>
    </div>
  );
}
