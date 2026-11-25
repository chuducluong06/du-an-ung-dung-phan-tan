import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import Button from '../Button';
import { formatCurrency } from '../../data/menuData';

export default function CartSummary({
  items = [],
  totalItems = 0,
  totalPrice = 0,
  onClearCart
}) {
  const [confirmClear, setConfirmClear] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--border)',
        position: 'sticky',
        top: 'calc(var(--navbar-height) + 1.5rem)'
      }}
    >
      <h3
        style={{
          color: 'var(--primary)',
          fontSize: '1.25rem',
          fontWeight: '800',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--border)'
        }}
      >
        Tóm tắt đơn hàng
      </h3>

      {/* Bảng kê chi tiết từng món (Giá × Số lượng) */}
      {items.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border)',
            maxHeight: '200px',
            overflowY: 'auto'
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '0.75rem',
                fontSize: '0.875rem',
                color: 'var(--text-muted)'
              }}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {item.name} <strong style={{ color: 'var(--primary)' }}>× {item.quantity}</strong>
              </span>
              <span style={{ fontWeight: '600', color: 'var(--primary)', whiteSpace: 'nowrap' }}>
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1.25rem',
          fontSize: '0.95rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Tổng số lượng món</span>
          <strong style={{ color: 'var(--primary)' }}>{totalItems} món</strong>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Tạm tính</span>
          <strong style={{ color: 'var(--primary)' }}>{formatCurrency(totalPrice)}</strong>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
          <span>Phí chế biến tại bếp</span>
          <strong style={{ color: 'var(--status-ready)' }}>Miễn phí</strong>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1rem',
          marginBottom: '1.5rem',
          borderTop: '2px dashed var(--border)'
        }}
      >
        <span style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--primary)' }}>
          Tổng thanh toán
        </span>
        <span style={{ fontWeight: '900', fontSize: '1.45rem', color: 'var(--accent)' }}>
          {formatCurrency(totalPrice)}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <Link to="/checkout" style={{ width: '100%' }}>
          <Button
            variant="accent"
            size="lg"
            disabled={totalItems <= 0}
            style={{ width: '100%' }}
            icon={<ArrowRight size={18} />}
          >
            Tiếp tục đặt món
          </Button>
        </Link>

        <Link to="/menu" style={{ width: '100%' }}>
          <Button
            variant="outline"
            size="md"
            style={{ width: '100%' }}
            icon={<ShoppingBag size={16} />}
          >
            Chọn thêm món khác
          </Button>
        </Link>

        {onClearCart && !confirmClear && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setConfirmClear(true)}
            style={{ width: '100%', color: 'var(--status-cancelled)', marginTop: '0.25rem' }}
            icon={<Trash2 size={15} />}
          >
            Xóa toàn bộ giỏ hàng
          </Button>
        )}

        {onClearCart && confirmClear && (
          <div
            style={{
              backgroundColor: 'rgba(220, 38, 38, 0.06)',
              border: '1px solid rgba(220, 38, 38, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem',
              textAlign: 'center',
              marginTop: '0.25rem'
            }}
          >
            <p style={{ fontSize: '0.85rem', color: 'var(--status-cancelled)', marginBottom: '0.6rem', fontWeight: '600' }}>
              Bạn chắc chắn muốn xóa toàn bộ giỏ hàng?
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  onClearCart();
                  setConfirmClear(false);
                }}
              >
                Xác nhận xóa
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setConfirmClear(false)}
              >
                Hủy
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
