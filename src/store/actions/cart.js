import {
  TOGGLE_SHOW_CART,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from '../types';

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

export function incrementQuantity(payload) {
  return {
    type: INCREMENT_QUANTITY,
    payload
  };
}

export function decrementQuantity(payload) {
  return {
    type: DECREMENT_QUANTITY,
    payload
  };
}
