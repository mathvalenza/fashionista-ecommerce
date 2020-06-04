import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { toggleShowCart } from 'store/actions/cart';

import { Drawer, ImagePlaceholder } from 'components';

export default function Cart() {
  const dispatch = useDispatch();
  const { showCart, cartItems } = useSelector((state) => state.cart);
  const cartLength = cartItems.length;
  const hasProductsInCart = cartLength > 0;

  const handleRemoveItem = (selectedSku) => {
    console.log('handleRemoveItem: ', selectedSku);
  };

  const handleSubtractItem = (selectedSku) => {
    console.log('handleSubtractItem: ', selectedSku);
  };

  const handleAddItem = (selectedSku) => {
    console.log('handleAddItem: ', selectedSku);
  };

  return (
    <Drawer
      title={`Sua sacola (${cartLength})`}
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
                          onClick={() => handleSubtractItem(selectedSku)}
                        >
                          -
                        </button>
                        <span className="change-quantity__current">
                          {quantity}
                        </span>
                        <button
                          className="change-quantity__button"
                          onClick={() => handleAddItem(selectedSku)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-item__price">
                      <p className="cart__product-title">R$ {actual_price}</p>
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
      <section className="cart__footer">Subtotal: R$ 0,00</section>
    </Drawer>
  );
}
