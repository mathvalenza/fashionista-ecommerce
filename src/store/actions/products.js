import {
  SET_IS_LOADING,
  SET_PRODUCTS,
  SET_SELECTED_PRODUCT,
  SEARCH_PRODUCTS,
  TOGGLE_SHOW_SEARCH
} from '../types';

import { getProducts } from 'services/api';

export function setIsLoading(payload) {
  return {
    type: SET_IS_LOADING,
    payload
  };
}

export function setProducts() {
  return async (dispatch) => {
    dispatch({ type: SET_IS_LOADING, payload: true });

    const products = await getProducts();

    dispatch({ type: SET_PRODUCTS, payload: products });

    dispatch({ type: SET_IS_LOADING, payload: false });
  };
}

export function setSelectedProduct(payload) {
  return {
    type: SET_SELECTED_PRODUCT,
    payload
  };
}

export function toggleShowSearch() {
  return {
    type: TOGGLE_SHOW_SEARCH
  };
}

export function searchProducts(payload) {
  return {
    type: SEARCH_PRODUCTS,
    payload
  };
}
