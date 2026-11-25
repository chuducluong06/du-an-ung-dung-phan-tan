import React from 'react';
import FoodCard from './FoodCard';
import { Utensils } from 'lucide-react';

export default function FoodList({ items = [], onAddToCart }) {
  if (items.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          margin: '1.5rem 0'
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            backgroundColor: 'rgba(1, 50, 48, 0.08)',
            color: 'var(--primary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem'
          }}
        >
          <Utensils size={26} />
        </div>
        <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>
          Không tìm thấy món ăn nào
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          Vui lòng thử chọn danh mục khác hoặc thay đổi từ khóa tìm kiếm.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}
    >
      {items.map((item) => (
        <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
