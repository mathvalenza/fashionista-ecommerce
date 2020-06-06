import { createSelector } from 'reselect';

import { currencyToNumber } from 'utils';

const subTotalSelector = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) =>
        acc + currencyToNumber(cartItem.actual_price) * cartItem.quantity,
      0
    )
);

const itemsQuantitySelector = createSelector(
  (state) => state.cart.cartItems,
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export { subTotalSelector, itemsQuantitySelector };
