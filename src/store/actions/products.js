import { SET_IS_LOADING, SET_PRODUCTS } from '../types';

import { getProducts } from '../../services/api';

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
