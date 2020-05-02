import React from 'react';

import Card from './Card';

export default function Products() {
  return (
    <div className="products">
      <div className="container">
        <h3 className="products__title">22 itens</h3>
      </div>
        <section className="cards">
          <div className="container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      
    </div>
  )
};
