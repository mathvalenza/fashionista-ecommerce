import React from 'react';

import './style.css';

import { ImagePlaceholder } from 'components';

export default function ProductCard({
  onClick,
  name,
  image,
  actual_price,
  discount_percentage
}) {
  return (
    <section onClick={() => onClick()} className="product-card">
      <div className="product-card__image">
        {discount_percentage && (
          <div className="product-card__sale">{discount_percentage}</div>
        )}
        <ImagePlaceholder name={name} image={image} />
      </div>
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__price">{actual_price}</div>
    </section>
  );
}
