import React from 'react';

export default function CategoryList({
  categories = [],
  selectedCategory = 'Tất cả',
  onSelectCategory
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.6rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
        marginBottom: '1.75rem',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory && onSelectCategory(cat)}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: '600',
              fontSize: '0.925rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              border: isSelected ? 'none' : '1.5px solid var(--border)',
              backgroundColor: isSelected ? 'var(--accent)' : 'var(--white)',
              color: isSelected ? 'var(--white)' : 'var(--text)',
              boxShadow: isSelected ? '0 4px 12px rgba(255, 106, 31, 0.25)' : 'var(--shadow-sm)',
              cursor: 'pointer'
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
