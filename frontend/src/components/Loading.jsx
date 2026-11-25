import React from 'react';

export default function Loading({
  text = 'Đang tải dữ liệu...',
  size = 'md',
  fullScreen = false
}) {
  const spinnerSizes = {
    sm: '20px',
    md: '36px',
    lg: '54px'
  };

  const currentSize = spinnerSizes[size] || spinnerSizes.md;

  const content = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '2rem'
      }}
    >
      <div
        style={{
          width: currentSize,
          height: currentSize,
          borderRadius: '50%',
          border: '3px solid rgba(1, 50, 48, 0.15)',
          borderTopColor: 'var(--accent)',
          animation: 'spin 0.8s linear infinite'
        }}
      />
      {text && (
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(243, 235, 221, 0.85)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(2px)'
        }}
      >
        {content}
      </div>
    );
  }

  return content;
}
