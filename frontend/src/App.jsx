import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import TrackingPage from './pages/TrackingPage';
import KitchenDashboard from './pages/KitchenDashboard';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <BrowserRouter>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/tracking/:id" element={<TrackingPage />} />
          <Route path="/kitchen" element={<KitchenDashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
