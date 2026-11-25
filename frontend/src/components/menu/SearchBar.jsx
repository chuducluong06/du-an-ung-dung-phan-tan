import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({
  value = '',
  onChange,
  onClear,
  placeholder = 'Tìm kiếm món ăn yêu thích (VD: cơm gà, phở, mì xào...)'
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        marginBottom: '1.25rem'
      }}
    >
      {/* Icon kính lúp */}
      <div
        style={{
          position: 'absolute',
          left: '14px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        <Search size={20} />
      </div>

      {/* Input tìm kiếm */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.8rem 2.8rem 0.8rem 2.75rem',
          backgroundColor: 'var(--white)',
          border: '1.5px solid var(--border)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.95rem',
          color: 'var(--text)',
          outline: 'none',
          boxShadow: 'var(--shadow-sm)',
          transition: 'all 0.2s ease'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--accent)';
          e.target.style.boxShadow = '0 0 0 3px rgba(255, 106, 31, 0.15)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = 'var(--border)';
          e.target.style.boxShadow = 'var(--shadow-sm)';
        }}
      />

      {/* Nút xóa nhanh từ khóa (X) */}
      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Xóa từ khóa"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            backgroundColor: 'rgba(1, 50, 48, 0.08)',
            border: 'none',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 106, 31, 0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(1, 50, 48, 0.08)')}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
