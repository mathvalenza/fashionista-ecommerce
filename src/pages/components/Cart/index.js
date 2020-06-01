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
        <section className="cart">
          <div className="cart__content">
            <article className="chosed-product">
              <div className="chosed-product__row">
                <img
                  className="chosed-product__image"
                  src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg"
                  alt=""
                />
                <div className="chosed-product__info">
                  <p className="cart__product-title">REGATA ALCINHA FOLK</p>
                  <p className="cart__product-subtitle">Tam.: PP</p>
                  <div className="change-quantity">
                    <button className="change-quantity__button">-</button>
                    <span className="change-quantity__current">0</span>
                    <button className="change-quantity__button">+</button>
                  </div>
                </div>
                <div className="chosed-product__price">
                  <p className="cart__product-title">R$ 99,90</p>
                  <p className="cart__product-subtitle">3 x R$ 33,00</p>
                </div>
              </div>
              <div className="chosed-product__row">
                <button className="cart__remove">Remover item</button>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <section className="cart--empty">
          <p>Sua sacola está vazia :(</p>
        </section>
      )}
      <section className="cart__footer">Subtotal: R$ 0,00</section>
    </Drawer>
  );
}
