import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, cartCount = 0 }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'var(--background)'
      }}
    >
      <Navbar cartCount={cartCount} />
      
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
