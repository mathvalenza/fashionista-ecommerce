import { SET_IS_LOADING, SET_PRODUCTS, SET_SELECTED_PRODUCT } from '../types';

const INITIAL_STATE = {
  isLoading: false,
  productsList: [],
  selectedProduct: {}
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case SET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload
      };

    case SET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload
      };

    default:
      return state;
  }
}
