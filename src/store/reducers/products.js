import {
  SET_IS_LOADING,
  SET_PRODUCTS,
  SET_VISITED_PRODUCT,
  TOGGLE_SHOW_SEARCH,
  SEARCH_PRODUCTS
} from '../types';

const INITIAL_STATE = {
  isLoading: false,
  productsList: [],
  visitedProduct: {},
  showSearch: false,
  filteredProducts: []
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

    case SEARCH_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload
          ? state.productsList.filter((product) =>
              product.name.toUpperCase().includes(action.payload.toUpperCase())
            )
          : []
      };

    default:
      return state;
  }
}
