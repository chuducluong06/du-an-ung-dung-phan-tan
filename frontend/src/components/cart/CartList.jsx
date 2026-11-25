import React from 'react';
import CartItem from './CartItem';

export default function CartList({
  items = [],
  onIncrease,
  onDecrease,
  onRemove
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.9rem'
      }}
    >
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
