import React from 'react';

import Card from './Card';

export default function Products() {
  return (
    <div className="container">
      <div className="products">
        <h3 className="products__title">22 itens</h3>
          <section className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </div>
    </div>
  )
};
