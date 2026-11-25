import React from 'react';
import { UtensilsCrossed, Cpu, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--primary)',
        color: 'var(--white)',
        paddingTop: '2.5rem',
        paddingBottom: '1.5rem',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}
        >
          {/* Cột 1: Thông tin hệ thống */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div
                style={{
                  backgroundColor: 'var(--accent)',
                  padding: '5px',
                  borderRadius: '6px'
                }}
              >
                <UtensilsCrossed size={18} color="var(--white)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800' }}>VELORA DINE</h3>
            </div>
            <p style={{ color: '#b5c9c7', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Hệ thống đặt món trực tuyến và xử lý đơn bếp phân tán với thông báo trạng thái theo thời gian thực (Realtime).
            </p>
          </div>

          {/* Cột 2: Kiến trúc phân tán */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--accent)' }}>
              Kiến trúc phân tán
            </h4>
            <ul style={{ listStyle: 'none', color: '#b5c9c7', fontSize: '0.875rem', lineHeight: '1.8' }}>
              <li>• Client Web App (React + Vite)</li>
              <li>• Order API (ASP.NET Core Minimal API)</li>
              <li>• Message Broker (RabbitMQ)</li>
              <li>• Kitchen Worker (Background Consumer)</li>
              <li>• Realtime Service (WebSocket / SignalR)</li>
            </ul>
          </div>

          {/* Cột 3: Đề tài BTL */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--accent)' }}>
              Bài tập lớn
            </h4>
            <p style={{ color: '#b5c9c7', fontSize: '0.875rem', lineHeight: '1.6' }}>
              Học phần: <strong>Phát triển ứng dụng phân tán</strong><br />
              Đề tài: <strong>04 - Hệ thống đặt món và xử lý tại bếp</strong><br />
              Nền tảng: <strong>.NET 10 & ReactJS</strong>
            </p>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div
          style={{
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#8faea9'
          }}
        >
          © 2026 VELORA DINE. Phát triển bởi Chu Đức Lương • Đề tài 04 - Hệ thống đặt món & xử lý tại bếp.
        </div>
      </div>
    </footer>
  );
}
