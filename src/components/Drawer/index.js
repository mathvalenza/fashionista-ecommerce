import React from 'react';

import './style.css';

export default function Drawer({ active, close, title }) {
  return (
    <div className={`drawer ${active ? 'drawer--active' : 'drawer--hidden'}`}>
      <div className="drawer__title">
        <i className="fa fa-arrow-left" onClick={close}></i>
        <span>{title}</span>
      </div>
      <div className="drawer__content">
        <span>Sua sacola está vazia :(</span>
      </div>
      <div className="drawer__footer">Subtotal - R$ 0,00</div>
    </div>
  );
}
