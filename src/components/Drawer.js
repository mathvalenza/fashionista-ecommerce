import React from 'react';

export default function Drawer({ close }) {
  return (
    <div className="drawer">
      DRAWER <span onClick={close}>(voltar)</span>
    </div>
  );
}
