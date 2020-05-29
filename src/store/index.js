import { createStore, combineReducers } from 'redux';
import productsReducer from '../pages/Products/reducer';

const reducers = combineReducers({
  productsReducer
});

const store = createStore(reducers);

export default store;
