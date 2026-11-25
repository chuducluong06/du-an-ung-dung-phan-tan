import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatCurrency } from '../../data/menuData';

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove
}) {
  const [imgError, setImgError] = useState(false);
  const fallbackImage =
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80';

  const subtotal = item.price * item.quantity;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.1rem',
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        flexWrap: 'wrap'
      }}
    >
      {/* Ảnh món */}
      <img
        src={imgError ? fallbackImage : item.image}
        alt={item.name}
        onError={() => setImgError(true)}
        style={{
          width: '82px',
          height: '82px',
          objectFit: 'cover',
          borderRadius: 'var(--radius-md)',
          flexShrink: 0,
          backgroundColor: '#eae2d3'
        }}
      />

      {/* Thông tin món */}
      <div style={{ flex: '1 1 200px', minWidth: '160px' }}>
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}
        >
          {item.category}
        </span>
        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: '700',
            color: 'var(--primary)',
            margin: '2px 0 4px'
          }}
        >
          {item.name}
        </h3>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Đơn giá:{' '}
          <strong style={{ color: 'var(--primary)' }}>
            {formatCurrency(item.price)}
          </strong>
        </div>
      </div>

      {/* Bộ điều chỉnh số lượng */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'var(--background)',
          padding: '4px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border)'
        }}
      >
        <button
          type="button"
          onClick={() => onDecrease(item.id)}
          aria-label="Giảm số lượng"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'var(--white)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Minus size={15} />
        </button>

        <span
          style={{
            minWidth: '28px',
            textAlign: 'center',
            fontWeight: '700',
            fontSize: '0.95rem',
            color: 'var(--primary)'
          }}
        >
          {item.quantity}
        </span>

        <button
          type="button"
          onClick={() => onIncrease(item.id)}
          aria-label="Tăng số lượng"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            color: 'var(--white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <Plus size={15} />
        </button>
      </div>

      {/* Thành tiền & Xóa */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginLeft: 'auto'
        }}
      >
        <div style={{ textAlign: 'right', minWidth: '105px' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Thành tiền
          </div>
          <div
            style={{
              fontSize: '1.1rem',
              fontWeight: '800',
              color: 'var(--accent)'
            }}
          >
            {formatCurrency(subtotal)}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onRemove(item.id)}
          aria-label="Xóa món"
          title="Xóa khỏi giỏ hàng"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'rgba(220, 38, 38, 0.08)',
            color: 'var(--status-cancelled)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease'
          }}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
