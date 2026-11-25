import React from 'react';
import { ChefHat, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

export default function KitchenDashboard() {
  return (
    <div className="fade-in" style={{ padding: '1rem 0' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div>
          <h1 style={{ color: 'var(--primary)', fontSize: '1.85rem', fontWeight: '800' }}>
            🍳 Kitchen Display System (KDS)
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            Màn hình điều phối và cập nhật trạng thái đơn hàng của bộ phận bếp
          </p>
        </div>
        <div
          style={{
            backgroundColor: 'var(--white)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-sm)',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: 'var(--primary)'
          }}
        >
          Trạng thái hàng đợi: <span style={{ color: 'var(--status-ready)' }}>● Sẵn sàng</span>
        </div>
      </div>

      {/* 4 Cột trạng thái theo tài liệu Đề tài 04 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.25rem'
        }}
      >
        {/* Cột 1: Pending */}
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            borderTop: '4px solid var(--status-pending)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Đơn mới (Pending)</h3>
            <span
              style={{
                backgroundColor: 'rgba(217, 119, 6, 0.1)',
                color: 'var(--status-pending)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}
            >
              0 đơn
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '2rem 0' }}>
            Đơn khách đặt sẽ xuất hiện tại đây
          </p>
        </div>

        {/* Cột 2: Preparing */}
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            borderTop: '4px solid var(--status-preparing)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Đang nấu (Preparing)</h3>
            <span
              style={{
                backgroundColor: 'rgba(2, 132, 199, 0.1)',
                color: 'var(--status-preparing)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}
            >
              0 đơn
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '2rem 0' }}>
            Các món đang được chế biến
          </p>
        </div>

        {/* Cột 3: Ready */}
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            borderTop: '4px solid var(--status-ready)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Hoàn thành (Ready)</h3>
            <span
              style={{
                backgroundColor: 'rgba(22, 163, 74, 0.1)',
                color: 'var(--status-ready)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}
            >
              0 đơn
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '2rem 0' }}>
            Món đã xong chờ phục vụ
          </p>
        </div>

        {/* Cột 4: Cancelled */}
        <div
          style={{
            backgroundColor: 'var(--white)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            boxShadow: 'var(--shadow-sm)',
            borderTop: '4px solid var(--status-cancelled)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)' }}>Đã hủy (Cancelled)</h3>
            <span
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                color: 'var(--status-cancelled)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 'bold',
                fontSize: '0.8rem'
              }}
            >
              0 đơn
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', padding: '2rem 0' }}>
            Đơn bị hủy bỏ
          </p>
        </div>
      </div>
    </div>
  );
}
