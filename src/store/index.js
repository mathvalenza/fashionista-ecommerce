import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['products']
};

const cartPersistConfig = {
  key: 'cart',
  storage: storage
};

const reducers = combineReducers({
  products: productsReducer,
  cart: persistReducer(cartPersistConfig, cartReducer)
});

export const store = createStore(
  persistReducer(rootPersistConfig, reducers),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);
