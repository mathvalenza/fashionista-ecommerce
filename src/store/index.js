import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/products';
import cart from './reducers/cart';

const reducers = combineReducers({
  products,
  cart
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
