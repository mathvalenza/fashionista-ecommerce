import React from 'react';

export default function Drawer({ active, close }) {
  const classes = `drawer ${active ? 'drawer--active' : 'drawer--hidden'}`;

  return (
    <div className={classes}>
      <div className="drawer__title">
        <i className="fa fa-arrow-left" onClick={close}></i>
        <span>Sua sacola</span>
      </div>
      <div className="drawer__content">
        <span>Sua sacola está vazia :(</span>
      </div>
      <div className="drawer__footer">Subtotal - R$ 0,00</div>
    </div>
  );
}
