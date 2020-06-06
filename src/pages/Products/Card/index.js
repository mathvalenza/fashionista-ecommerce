import React from 'react';

import './style.css';

import { ImagePlaceholder } from 'components';

export default function ProductCard({ onClick, name, image, actual_price }) {
  return (
    <section onClick={() => onClick()} className="product-card">
      <ImagePlaceholder name={name} image={image} />
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__price">{actual_price}</div>
    </section>
  );
}
