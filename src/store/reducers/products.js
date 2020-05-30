import { SET_IS_LOADING, SET_PRODUCTS } from '../types';

const INITIAL_STATE = {
  isLoading: false,
  productsList: []
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
    default:
      return state;
  }
}
