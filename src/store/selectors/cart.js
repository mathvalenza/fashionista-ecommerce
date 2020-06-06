import { createSelector } from 'reselect';

const subTotalSelector = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => {
    console.log('aaaaaaaa');

    return cartItems.reduce((acc, cartItem) => acc + 10, 0);
  }
);

const itemsQuantitySelector = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export { subTotalSelector, itemsQuantitySelector };
