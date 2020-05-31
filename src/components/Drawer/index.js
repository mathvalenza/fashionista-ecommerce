import React from 'react';

import './style.css';

export default function Drawer({ children, active, close, title }) {
  return (
    <div className={`drawer ${active ? 'drawer--active' : 'drawer--hidden'}`}>
      <div className="drawer__title">
        <i className="fa fa-arrow-left" onClick={close}></i>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}
