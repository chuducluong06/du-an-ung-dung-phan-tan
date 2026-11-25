import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Utensils, ChefHat, Clock, ArrowRight, Sparkles, Flame, Search } from 'lucide-react';
import Button from '../components/Button';
import FoodList from '../components/menu/FoodList';
import { menuItems } from '../data/menuData';

export default function HomePage({ onAddToCart }) {
  const navigate = useNavigate();
  const [quickSearch, setQuickSearch] = useState('');

  // Lấy các món ăn nổi bật / bán chạy
  const popularItems = menuItems.filter((item) => item.isPopular).slice(0, 4);

  const handleQuickSearchSubmit = (e) => {
    e.preventDefault();
    if (quickSearch.trim()) {
      navigate(`/menu?search=${encodeURIComponent(quickSearch.trim())}`);
    } else {
      navigate('/menu');
    }
  };

  return (
    <div className="fade-in" style={{ padding: '0.5rem 0' }}>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(255, 106, 31, 0.1)',
              color: 'var(--accent)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={16} /> Đề tài 04 - Hệ thống đặt món & xử lý tại bếp (.NET 10 & React)
          </div>

          <h1
            style={{
              color: 'var(--primary)',
              fontSize: '2.5rem',
              lineHeight: '1.25',
              fontWeight: '800',
              marginBottom: '1.25rem'
            }}
          >
            Trải nghiệm ẩm thực tươi ngon, <span style={{ color: 'var(--accent)' }}>xử lý tức thì</span> tại bếp.
          </h1>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: '1.7',
              marginBottom: '1.75rem'
            }}
          >
            Khách hàng dễ dàng lựa chọn món ăn và nhận thông báo trạng thái chế biến theo thời gian thực (Realtime) nhờ kiến trúc phân tán kết hợp RabbitMQ và SignalR/WebSocket.
          </p>

          {/* Quick Search Form ngay trên Hero */}
          <form
            onSubmit={handleQuickSearchSubmit}
            style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '1.75rem',
              maxWidth: '460px'
            }}
          >
            <div style={{ position: 'relative', flex: 1 }}>
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)'
                }}
              />
              <input
                type="text"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder="Bạn muốn ăn gì hôm nay? (cơm gà, mì...)"
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem 0.7rem 2.4rem',
                  border: '1.5px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
            </div>
            <Button type="submit" variant="accent" size="md">
              Tìm món
            </Button>
          </form>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/menu">
              <Button variant="accent" size="lg" icon={<Utensils size={20} />}>
                Xem Thực Đơn Ngay
              </Button>
            </Link>
            <Link to="/kitchen">
              <Button variant="outline" size="lg" icon={<ChefHat size={20} />}>
                Màn Hình Bếp (KDS)
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Card Visual */}
        <div
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', color: '#a0c4c1' }}>Kiến trúc phân tán .NET 10</span>
            <span
              style={{
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontSize: '0.75rem',
                padding: '3px 8px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold'
              }}
            >
              REALTIME
            </span>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              borderLeft: '4px solid var(--accent)'
            }}
          >
            <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>
              1. Khách đặt món (Order API Minimal API)
            </div>
            <div style={{ fontSize: '0.85rem', color: '#b5c9c7' }}>
              Lưu PostgreSQL & đẩy thông điệp vào RabbitMQ
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              borderLeft: '4px solid #0284c7'
            }}
          >
            <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>
              2. Kitchen Worker nhận & chế biến
            </div>
            <div style={{ fontSize: '0.85rem', color: '#b5c9c7' }}>
              Pending → Preparing → Ready (Phát sự kiện RabbitMQ)
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              borderLeft: '4px solid #16a34a'
            }}
          >
            <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>
              3. Notification Service gửi Client
            </div>
            <div style={{ fontSize: '0.85rem', color: '#b5c9c7' }}>
              SignalR cập nhật trạng thái đơn ngay tức thì
            </div>
          </div>
        </div>
      </section>

      {/* 2. Khu vực Món Ăn Bán Chạy (Popular Items) */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div
              style={{
                color: 'var(--accent)',
                fontWeight: '700',
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginBottom: '4px'
              }}
            >
              <Flame size={18} /> GỢI Ý HÔM NAY
            </div>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.85rem', fontWeight: '800' }}>
              Món Ăn Nổi Bật Được Yêu Thích
            </h2>
          </div>

          <Link
            to="/menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '0.95rem'
            }}
          >
            Xem toàn bộ thực đơn <ArrowRight size={18} color="var(--accent)" />
          </Link>
        </div>

        <FoodList items={popularItems} onAddToCart={onAddToCart} />
      </section>

      {/* 3. 3 Trụ cột chức năng */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--white)',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'rgba(255, 106, 31, 0.1)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: 'var(--accent)'
            }}
          >
            <Utensils size={24} />
          </div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            Đặt món tiện lợi
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
            Xem danh sách món ăn, tìm kiếm theo tên, phân loại món theo danh mục và dễ dàng tùy biến giỏ hàng.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--white)',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'rgba(1, 50, 48, 0.1)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: 'var(--primary)'
            }}
          >
            <ChefHat size={24} />
          </div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            Quản lý bếp tức thời
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
            Màn hình KDS phân loại đơn rõ ràng: Đơn mới, Đang nấu, Hoàn thành, Hủy đơn với cơ chế hàng đợi RabbitMQ.
          </p>
        </div>

        <div
          style={{
            backgroundColor: 'var(--white)',
            padding: '1.75rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'rgba(2, 132, 199, 0.1)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: '#0284c7'
            }}
          >
            <Clock size={24} />
          </div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            Thông báo Realtime
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6' }}>
            Khách hàng được cập nhật trạng thái đơn ngay tức thì khi đầu bếp thay đổi mà không cần tải lại trang.
          </p>
        </div>
      </section>
    </div>
  );
}
