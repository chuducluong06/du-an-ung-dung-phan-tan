import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from '../context/CartContext';

export default function Layout({ children }) {
  const { totalItems } = useCart();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--background)'
      }}
    >
      <Navbar cartCount={totalItems} />
      
      <main
        style={{
          flex: 1,
          paddingTop: '1.5rem',
          paddingBottom: '2.5rem'
        }}
      >
        <div className="container">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
