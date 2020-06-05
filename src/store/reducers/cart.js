import {
  TOGGLE_SHOW_CART,
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY
} from '../types';

const INITIAL_STATE = {
  showCart: false,
  cartItems: [],
  itemsQuantity: 0,
  subTotalPrice: 0
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
                item.selectedSku === sameProductInCart.selectedSku
                  ? item.quantity + 1
                  : item.quantity
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
        cartItems: newCartItems,
        itemsQuantity: state.itemsQuantity + 1,
        subTotalPrice: 10
      };

    case INCREMENT_QUANTITY:
      return {
        ...state,
        itemsQuantity: state.itemsQuantity + 1,
        cartItems: [...state.cartItems].map((cartItem) => ({
          ...cartItem,
          quantity:
            cartItem.selectedSku === action.payload
              ? cartItem.quantity + 1
              : cartItem.quantity
        }))
      };

    case DECREMENT_QUANTITY:
      const cartItem = state.cartItems.find(
        ({ selectedSku }) => selectedSku === action.payload
      );

      if (cartItem.quantity <= 1)
        return {
          ...state
        };

      return {
        ...state,
        itemsQuantity: state.itemsQuantity - 1,
        cartItems: [...state.cartItems].map((cartItem) => ({
          ...cartItem,
          quantity:
            cartItem.selectedSku === action.payload
              ? cartItem.quantity - 1
              : cartItem.quantity
        }))
      };

    default:
      return state;
  }
}
