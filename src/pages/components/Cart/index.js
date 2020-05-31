import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { toggleShowCart } from 'store/actions/cart';

import { Drawer } from 'components';

export default function Cart() {
  const dispatch = useDispatch();
  const { showCart } = useSelector((state) => state.cart);

  const hasProductsInCart = true;

  return (
    <Drawer
      title="Sua sacola"
      active={showCart}
      close={() => dispatch(toggleShowCart())}
    >
      {hasProductsInCart ? (
        <div className="cart">CART</div>
      ) : (
        <div className="cart--empty">
          <p>Sua sacola está vazia :(</p>
        </div>
      )}
    </Drawer>
  );
}
