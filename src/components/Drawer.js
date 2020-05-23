import React from 'react';

export default function Drawer({ active, close }) {
  const classes = `drawer ${active ? 'drawer--active' : ''}`;

  return (
    <div className={classes}>
      <div className="drawer__title">
        <i className="fa fa-arrow-left" onClick={close}></i>
      </div>
      <div className="drawer__content">CONTENT</div>
      <div className="drawer__footer">FOOTER</div>
    </div>
  );
}
