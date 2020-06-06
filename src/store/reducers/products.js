import {
  SET_IS_LOADING,
  SET_PRODUCTS_LIST,
  SET_VISITED_PRODUCT,
  TOGGLE_SHOW_SEARCH
} from '../types';

const INITIAL_STATE = {
  isLoading: false,
  productsList: [],
  visitedProduct: {},
  showSearch: false
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case SET_PRODUCTS_LIST:
      return {
        ...state,
        productsList: action.payload
      };

    case SET_VISITED_PRODUCT:
      return {
        ...state,
        visitedProduct: action.payload
      };

    case TOGGLE_SHOW_SEARCH:
      return {
        ...state,
        showSearch: !state.showSearch
      };

    default:
      return state;
  }
}
