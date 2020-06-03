import { TOGGLE_SHOW_CART, ADD_TO_CART } from '../types';

export function toggleShowCart() {
  return {
    type: TOGGLE_SHOW_CART
  };
}

export function addToCart(payload) {
  return {
    type: ADD_TO_CART,
    payload
  };
}
