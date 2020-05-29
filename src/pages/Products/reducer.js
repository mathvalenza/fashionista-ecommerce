import { GET_TODOS, SET_PRODUCTS } from './types';

const INITIAL_STATE = {
  todo: 'OK',
  todos: [],
  products: []
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: ['todo 1', 'todo 2']
      };

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
