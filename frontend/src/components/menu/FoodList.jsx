import React from 'react';
import FoodCard from './FoodCard';
import { SearchX, RotateCcw } from 'lucide-react';
import Button from '../Button';

export default function FoodList({
  items = [],
  onAddToCart,
  searchQuery = '',
  selectedCategory = 'Tất cả',
  onResetFilters
}) {
  if (items.length === 0) {
    return (
      <div
        className="fade-in"
        style={{
          textAlign: 'center',
          padding: '3.5rem 1.5rem',
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          margin: '1.5rem 0',
          border: '1px dashed var(--border)'
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(255, 106, 31, 0.1)',
            color: 'var(--accent)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem'
          }}
        >
          <SearchX size={32} />
        </div>

        <h3
          style={{
            color: 'var(--primary)',
            marginBottom: '0.5rem',
            fontSize: '1.35rem',
            fontWeight: '700'
          }}
        >
          Không tìm thấy món ăn phù hợp
        </h3>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            maxWidth: '480px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.6'
          }}
        >
          {searchQuery ? (
            <>
              Không có kết quả nào cho từ khóa <strong>"{searchQuery}"</strong>
              {selectedCategory !== 'Tất cả' && (
                <> trong danh mục <strong>"{selectedCategory}"</strong></>
              )}.
            </>
          ) : (
            <>
              Hiện chưa có món ăn nào trong danh mục <strong>"{selectedCategory}"</strong>.
            </>
          )}
        </p>

        {onResetFilters && (
          <Button
            variant="accent"
            size="md"
            icon={<RotateCcw size={16} />}
            onClick={onResetFilters}
          >
            Đặt lại bộ lọc tìm kiếm
          </Button>
        )}
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
