import React from 'react';
import { Search, Clock } from 'lucide-react';
import Button from '../components/Button';

export default function TrackingPage() {
  return (
    <div className="fade-in" style={{ padding: '2rem 0', maxWidth: '680px', margin: '0 auto' }}>
      <div
        style={{
          backgroundColor: 'var(--white)',
          padding: '2.5rem 2rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(2, 132, 199, 0.1)',
            color: '#0284c7',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem'
          }}
        >
          <Search size={28} />
        </div>
        <h2 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1.75rem' }}>
          Tra Cứu & Theo Dõi Đơn Hàng
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
          Nhập mã đơn hàng của bạn để kiểm tra tiến độ chế biến tại bếp theo thời gian thực.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="VD: ORD-0001"
            style={{
              padding: '0.65rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--border)',
              outline: 'none',
              width: '100%',
              maxWidth: '300px'
            }}
          />
          <Button variant="accent">
            Tra cứu
          </Button>
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Trang theo dõi chi tiết sẽ được hoàn thiện trong <strong>Ngày 10</strong> theo kế hoạch.
        </p>
      </div>
    </div>
  );
}
