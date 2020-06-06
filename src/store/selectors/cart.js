import { createSelector } from 'reselect';

import { currencyToNumber } from 'utils';

const subTotalSelector = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce(
      (subTotal, cartItem) =>
        subTotal + currencyToNumber(cartItem.actual_price) * cartItem.quantity,
      0
    )
);

const itemsQuantitySelector = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export { subTotalSelector, itemsQuantitySelector };
