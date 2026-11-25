import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <div className="fade-in" style={{ padding: '3rem 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: 'var(--accent)', fontWeight: '900', marginBottom: '0.5rem' }}>
        404
      </h1>
      <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
        Không tìm thấy trang yêu cầu
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Trang bạn đang tìm kiếm có thể đã bị đổi tên hoặc không tồn tại.
      </p>
      <Link to="/">
        <Button variant="accent">Quay về Trang chủ</Button>
      </Link>
    </div>
  );
}
