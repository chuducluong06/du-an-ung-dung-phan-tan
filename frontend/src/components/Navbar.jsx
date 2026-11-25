import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { UtensilsCrossed, ShoppingBag, ChefHat, Search, Menu as MenuIcon, X } from 'lucide-react';

export default function Navbar({ cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--accent)' : 'var(--white)',
    fontWeight: isActive ? '700' : '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.5rem 0.75rem',
    borderRadius: 'var(--radius-sm)',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent'
  });

  return (
    <header
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--white)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: 'var(--shadow-md)',
        height: 'var(--navbar-height)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            color: 'var(--white)',
            textDecoration: 'none',
            fontSize: '1.35rem',
            fontWeight: '800',
            letterSpacing: '0.5px'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--accent)',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <UtensilsCrossed size={20} color="var(--white)" />
          </div>
          <span>VELORA <span style={{ color: 'var(--accent)' }}>DINE</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
          className="desktop-nav"
        >
          <NavLink to="/" style={getLinkStyle}>
            Trang chủ
          </NavLink>
          <NavLink to="/menu" style={getLinkStyle}>
            Thực đơn
          </NavLink>
          <NavLink to="/tracking" style={getLinkStyle}>
            <Search size={16} />
            Tra cứu đơn
          </NavLink>

          {/* Cart with badge */}
          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              ...getLinkStyle({ isActive }),
              position: 'relative',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)'
            })}
          >
            <ShoppingBag size={18} />
            <span>Giỏ hàng</span>
            {cartCount > 0 && (
              <span
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--white)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '2px 7px',
                  borderRadius: 'var(--radius-full)',
                  marginLeft: '4px'
                }}
              >
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* Kitchen Dashboard Link */}
          <NavLink
            to="/kitchen"
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: isActive ? 'var(--accent)' : 'var(--primary-light)',
              color: 'var(--white)',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: '600',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'background 0.2s ease'
            })}
          >
            <ChefHat size={18} />
            <span>Bếp (KDS)</span>
          </NavLink>
        </nav>

        {/* Mobile menu toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--white)', padding: '6px' }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--primary)',
            padding: '1rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} style={getLinkStyle}>
            Trang chủ
          </NavLink>
          <NavLink to="/menu" onClick={() => setMobileMenuOpen(false)} style={getLinkStyle}>
            Thực đơn
          </NavLink>
          <NavLink to="/tracking" onClick={() => setMobileMenuOpen(false)} style={getLinkStyle}>
            Tra cứu đơn
          </NavLink>
          <NavLink to="/cart" onClick={() => setMobileMenuOpen(false)} style={getLinkStyle}>
            Giỏ hàng ({cartCount})
          </NavLink>
          <NavLink to="/kitchen" onClick={() => setMobileMenuOpen(false)} style={getLinkStyle}>
            Bếp (KDS)
          </NavLink>
        </div>
      )}
    </header>
  );
}
