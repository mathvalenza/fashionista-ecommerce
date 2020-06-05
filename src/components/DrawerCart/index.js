import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import {
  toggleShowCart,
  incrementQuantity,
  decrementQuantity
} from 'store/actions/cart';

import { Drawer, ImagePlaceholder } from 'components';

export default function Cart() {
  const dispatch = useDispatch();
  const { showCart, cartItems, itemsQuantity, subTotalPrice } = useSelector(
    (state) => state.cart
  );
  const hasProductsInCart = itemsQuantity > 0;
  const subTotalFormated = `Subtotal: ${subTotalPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })}`;

  const handleRemoveItem = (selectedSku) => {
    console.log('handleRemoveItem: ', selectedSku);
  };

  const handleDecrementQuantity = (selectedSku) => {
    console.log('handleDecrementQuantity: ', selectedSku);
    dispatch(decrementQuantity(selectedSku));
  };

  const handleIncrementQuantity = (selectedSku) => {
    console.log('handleIncrementQuantity: ', selectedSku);

    dispatch(incrementQuantity(selectedSku));
  };

  return (
    <Drawer
      title={`Sua sacola (${itemsQuantity})`}
      active={showCart}
      close={() => dispatch(toggleShowCart())}
    >
      {hasProductsInCart ? (
        <section className="cart">
          <div className="cart__content">
            {cartItems.map((cartItem) => {
              const {
                name,
                actual_price,
                installments,
                image,
                quantity,
                selectedSku
              } = cartItem;
              const size = cartItem.sizes.find(
                ({ sku }) => sku === cartItem.selectedSku
              ).size;

              return (
                <article className="cart-item" key={cartItem.selectedSku}>
                  <div className="cart-item__row">
                    <div className="cart-item__image">
                      <ImagePlaceholder image={image} name={name} />
                    </div>
                    <div className="cart-item__info">
                      <p className="cart__product-title">{name}</p>
                      <p className="cart__product-subtitle">Tam.: {size}</p>
                      <div className="change-quantity">
                        <button
                          className="change-quantity__button"
                          onClick={() => handleDecrementQuantity(selectedSku)}
                        >
                          -
                        </button>
                        <span className="change-quantity__current">
                          {quantity}
                        </span>
                        <button
                          className="change-quantity__button"
                          onClick={() => handleIncrementQuantity(selectedSku)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-item__price">
                      <p className="cart__product-title">{actual_price}</p>
                      <p className="cart__product-subtitle">{installments}</p>
                    </div>
                  </div>
                  <div className="cart-item__row">
                    <button
                      className="cart__remove"
                      onClick={() => handleRemoveItem(selectedSku)}
                    >
                      Remover item
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="cart--empty">
          <p>Sua sacola está vazia :(</p>
        </section>
      )}
      <section className="cart__footer">{subTotalFormated}</section>
    </Drawer>
  );
}
