import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { toggleShowCart } from 'store/actions/cart';

import { Drawer } from 'components';

export default function Search() {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.cart);

  return (
    <Drawer
      title="Search"
      active={showCart}
      close={() => dispatch(toggleShowCart())}
    />
  );
}
