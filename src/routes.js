import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Products, Product } from './pages';

export default function Routes() {
  return (
      <>
        <Redirect from="/" to="/products" />
        <Route path="/products" exact component={Products} />
        <Route path={`/product/:name`} component={Product} />
      </>
  );
};
