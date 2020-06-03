import { TOGGLE_SHOW_CART, ADD_TO_CART } from '../types';

const INITIAL_STATE = {
  showCart: false,
  cartItems: []
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart
      };

    case ADD_TO_CART:
      const sameProductInCart = state.cartItems.find(
        ({ selectedSku }) => selectedSku === action.payload.selectedSku
      );

      const newCartItems = !!sameProductInCart
        ? [
            ...state.cartItems.map((item) => ({
              ...item,
              quantity:
                item.selectedSku === action.payload.selectedSku
                  ? item.quantity
                  : item.quantity + 1
            }))
          ]
        : [
            ...state.cartItems,
            {
              ...action.payload,
              quantity: 1
            }
          ];

      return {
        ...state,
        cartItems: newCartItems
      };

    default:
      return state;
  }
}
