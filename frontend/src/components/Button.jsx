import React from 'react';

export default function Button({
  children,
  variant = 'accent',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  icon = null,
  type = 'button',
  className = '',
  style = {}
}) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: '600',
    borderRadius: 'var(--radius-md)',
    transition: 'all 0.2s ease',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    border: 'none',
    boxShadow: 'var(--shadow-sm)'
  };

  const sizeStyles = {
    sm: { padding: '0.4rem 0.8rem', fontSize: '0.875rem' },
    md: { padding: '0.65rem 1.25rem', fontSize: '1rem' },
    lg: { padding: '0.85rem 1.75rem', fontSize: '1.125rem' }
  };

  const variantStyles = {
    accent: {
      backgroundColor: 'var(--accent)',
      color: 'var(--white)'
    },
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--white)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      border: '1.5px solid var(--primary)'
    },
    danger: {
      backgroundColor: 'var(--status-cancelled)',
      color: 'var(--white)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--primary)',
      boxShadow: 'none'
    }
  };

  const computedStyle = {
    ...baseStyle,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      style={computedStyle}
      className={`btn ${className}`}
    >
      {loading ? (
        <span
          style={{
            display: 'inline-block',
            width: '16px',
            height: '16px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderTopColor: 'currentColor',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
          }}
        />
      ) : icon}
      <span>{children}</span>
    </button>
  );
}
