import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import products from './reducers/products';

const reducers = combineReducers({
  products
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
