import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories, menuItems } from '../data/menuData';
import CategoryList from '../components/menu/CategoryList';
import FoodList from '../components/menu/FoodList';
import SearchBar from '../components/menu/SearchBar';

export default function MenuPage({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'Tất cả';

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Đồng bộ search param nếu URL thay đổi
  useEffect(() => {
    const urlSearch = searchParams.get('search');
    if (urlSearch !== null) setSearch(urlSearch);

    const urlCategory = searchParams.get('category');
    if (urlCategory !== null && categories.includes(urlCategory)) {
      setSelectedCategory(urlCategory);
    }
  }, [searchParams]);

  // Cập nhật URL khi đổi category hoặc search (tùy chọn để link chia sẻ được)
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'Tất cả') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleSearchChange = (val) => {
    setSearch(val);
    if (!val) {
      searchParams.delete('search');
    } else {
      searchParams.set('search', val);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategory('Tất cả');
    setSearchParams({}, { replace: true });
  };

  // Lọc kết hợp: Tên món/Mô tả món VÀ Danh mục
  const filteredItems = menuItems.filter((item) => {
    const cleanSearch = search.trim().toLowerCase();
    const matchName = cleanSearch === '' || 
      item.name.toLowerCase().includes(cleanSearch) || 
      item.description.toLowerCase().includes(cleanSearch);

    const matchCategory =
      selectedCategory === 'Tất cả' || item.category === selectedCategory;

    return matchName && matchCategory;
  });

  return (
    <div className="fade-in" style={{ padding: '0.5rem 0' }}>
      {/* Header trang thực đơn */}
      <div style={{ marginBottom: '1.5rem' }}>
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

      {/* Thanh tìm kiếm món ăn */}
      <SearchBar
        value={search}
        onChange={handleSearchChange}
        onClear={() => handleSearchChange('')}
        placeholder="Tìm kiếm món ăn theo tên hoặc hương vị (VD: gà xối mỡ, phở, bún...)"
      />

      {/* Danh mục món ăn */}
      <CategoryList
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* Thông tin số lượng kết quả và trạng thái lọc */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}
      >
        <span style={{ fontSize: '0.925rem', color: 'var(--text-muted)' }}>
          Hiển thị <strong>{filteredItems.length}</strong> món ăn
          {selectedCategory !== 'Tất cả' && (
            <span> trong danh mục <strong>{selectedCategory}</strong></span>
          )}
          {search.trim() && (
            <span> khớp với từ khóa "<strong>{search.trim()}</strong>"</span>
          )}
        </span>

        {(search || selectedCategory !== 'Tất cả') && (
          <button
            onClick={handleResetFilters}
            style={{
              fontSize: '0.85rem',
              color: 'var(--accent)',
              fontWeight: '600',
              textDecoration: 'underline',
              cursor: 'pointer',
              background: 'none',
              border: 'none'
            }}
          >
            Xóa bộ lọc
          </button>
        )}
      </div>

      {/* Danh sách món ăn kết hợp tìm kiếm & lọc */}
      <FoodList
        items={filteredItems}
        onAddToCart={onAddToCart}
        searchQuery={search}
        selectedCategory={selectedCategory}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
}
