import React from 'react';

import Card from '../components/Card';

export default function Home({ history }) {
  function handleClick(productId) {
    history.push(`/product/${productId}`, { productId });
  }

  return (
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
  )
};
