import React from 'react';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom';

import { Products, Product } from './pages';
import Header from './components/Header';

export default function Routes() {
  const HeaderWithRouter = withRouter(Header);

  return (
    <BrowserRouter>
      <HeaderWithRouter />
      <div className="app">
        <Redirect from="/" to="/products" />
        <Route path="/products" component={Products} />
        <Route path={`/product/:productId`} component={Product} />
      </div>
    </BrowserRouter>
  );
};
