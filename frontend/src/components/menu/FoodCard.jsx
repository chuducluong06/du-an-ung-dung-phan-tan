import React, { useState } from 'react';
import { Plus, Clock, Flame } from 'lucide-react';
import Button from '../Button';
import { formatCurrency } from '../../data/menuData';

export default function FoodCard({ item, onAddToCart }) {
  const [imgError, setImgError] = useState(false);

  // Fallback image in case network or unsplash fails
  const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";

  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        border: '1px solid var(--border)',
        position: 'relative'
      }}
      className="food-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
    >
      {/* Popular Badge */}
      {item.isPopular && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'var(--accent)',
            color: 'var(--white)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            zIndex: 2,
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
          }}
        >
          <Flame size={14} /> Bán chạy
        </div>
      )}

      {/* Image container */}
      <div
        style={{
          width: '100%',
          height: '190px',
          overflow: 'hidden',
          backgroundColor: '#eae2d3',
          position: 'relative'
        }}
      >
        <img
          src={imgError ? fallbackImage : item.image}
          alt={item.name}
          onError={() => setImgError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: 'rgba(1, 50, 48, 0.75)',
            color: 'var(--white)',
            padding: '3px 8px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backdropFilter: 'blur(3px)'
          }}
        >
          <Clock size={12} /> {item.prepTime || '10 phút'}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          <span
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {item.category}
          </span>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: 'var(--primary)',
              marginTop: '4px',
              marginBottom: '8px',
              lineHeight: '1.3'
            }}
          >
            {item.name}
          </h3>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {item.description}
          </p>
        </div>

        {/* Price & Action */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(1, 50, 48, 0.08)'
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Giá món</div>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: '800',
                color: 'var(--accent)'
              }}
            >
              {formatCurrency(item.price)}
            </div>
          </div>

          <Button
            variant="accent"
            size="sm"
            onClick={() => onAddToCart && onAddToCart(item)}
            icon={<Plus size={16} />}
          >
            Chọn món
          </Button>
        </div>
      </div>
    </div>
  );
}
