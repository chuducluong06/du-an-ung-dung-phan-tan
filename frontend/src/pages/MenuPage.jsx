import React, { useState } from 'react';
import { categories, menuItems } from '../data/menuData';
import CategoryList from '../components/menu/CategoryList';
import FoodList from '../components/menu/FoodList';

export default function MenuPage({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Lọc theo danh mục
  const filteredItems = menuItems.filter((item) => {
    return selectedCategory === 'Tất cả' || item.category === selectedCategory;
  });

  return (
    <div className="fade-in" style={{ padding: '0.5rem 0' }}>
      {/* Header trang thực đơn */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1
          style={{
            color: 'var(--primary)',
            fontSize: '2rem',
            fontWeight: '800',
            marginBottom: '0.5rem'
          }}
        >
          📖 Thực Đơn Nhà Hàng
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
          Tuyển chọn các món ăn tươi ngon, chế biến ngay khi nhận đơn tại bếp
        </p>
      </div>

      {/* Danh mục món ăn */}
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Danh sách món ăn */}
      <div style={{ marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
          Hiển thị <strong>{filteredItems.length}</strong> món ăn
        </span>
      </div>

      <FoodList items={filteredItems} onAddToCart={onAddToCart} />
    </div>
  );
}
