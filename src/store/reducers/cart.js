import { TOGGLE_SHOW_CART } from '../types';

const INITIAL_STATE = {
  showCart: false
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SHOW_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
}
