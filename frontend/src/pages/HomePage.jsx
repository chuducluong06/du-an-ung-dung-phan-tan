import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ChefHat, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../components/Button';

export default function HomePage() {
  return (
    <div className="fade-in" style={{ padding: '1rem 0' }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem 2.5rem',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '2.5rem'
        }}
      >
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
            <Sparkles size={16} /> Đề tài 04 - Hệ thống đặt món & xử lý tại bếp
          </div>

          <h1
            style={{
              color: 'var(--primary)',
              fontSize: '2.5rem',
              lineHeight: '1.2',
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
              marginBottom: '2rem'
            }}
          >
            Khách hàng dễ dàng lựa chọn món ăn và nhận thông báo trạng thái chế biến theo thời gian thực (Realtime) nhờ kiến trúc phân tán kết hợp RabbitMQ và SignalR/WebSocket.
          </p>

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
            <span style={{ fontSize: '0.9rem', color: '#a0c4c1' }}>Luồng xử lý đơn hàng</span>
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
              1. Khách đặt món (Order API)
            </div>
            <div style={{ fontSize: '0.85rem', color: '#b5c9c7' }}>
              Lưu Database & đẩy thông điệp vào RabbitMQ
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
              Pending → Preparing → Ready (Phát sự kiện)
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
              Cập nhật giao diện khách hàng ngay lập tức
            </div>
          </div>
        </div>
      </section>

      {/* 3 Trụ cột chức năng */}
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
