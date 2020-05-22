import React from 'react';

export default function Drawer({ active, close }) {
  const classes = `drawer ${active ? 'drawer--active' : ''}`;

  return (
    <div className={classes}>
      DRAWER <span onClick={close}>(voltar)</span>
    </div>
  );
}
