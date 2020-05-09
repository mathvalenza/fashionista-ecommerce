import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import Header from '../components/Header';
import Card from '../components/Card';
import Product from './Product.js';

export default function Home() {
  const history = useHistory();

  function handleClick(productId) {
    console.log('parent on click card', productId);

    history.push(`/products/${productId}`, { productId });
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="products">
          <h3 className="products__title">22 itens</h3>
          <section className="cards">
            <Card id="1" onClick={handleClick}/>
            <Card id="2" onClick={handleClick} />
            <Card id="3" onClick={handleClick} />
            <Card id="4" onClick={handleClick} />
            <Card id="5" onClick={handleClick} />
          </section>
        </div>
      </div>
      <Route path={`/products/:productId`} component={Product} />
    </div>
  )
};
