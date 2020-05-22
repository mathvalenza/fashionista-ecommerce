import React from 'react';

import ProductImage from './ProductImage';

export default function ProductCard({ onClick, name, image, actual_price }) {
  function handeClick() {
    onClick(name);
  }

  return (
    <section onClick={handeClick} className="product-card">
      <ProductImage name={name} image={image} />
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__price">{actual_price}</div>
    </section>
  );
}
