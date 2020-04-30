import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, Product } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" component={Product} />
    </BrowserRouter>
  );
};
