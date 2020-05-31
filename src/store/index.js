import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/products';
import cart from './reducers/cart';
import search from './reducers/search';

const reducers = combineReducers({
  products,
  cart,
  search
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
