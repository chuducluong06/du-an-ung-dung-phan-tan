import React from 'react';
import { Utensils, Construction } from 'lucide-react';

export default function MenuPage() {
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
            backgroundColor: 'rgba(255, 106, 31, 0.12)',
            color: 'var(--accent)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}
        >
          <Utensils size={30} />
        </div>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.75rem' }}>
          Trang Thực Đơn (Menu)
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Khung trang đã sẵn sàng. Danh mục món ăn, FoodCard, tìm kiếm và bộ lọc sẽ được hoàn thiện trong <strong>Ngày 3 & Ngày 4</strong> theo lộ trình.
        </p>
      </div>
    </div>
  );
}
