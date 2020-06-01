import React from 'react';

import './style.css';

import { ImagePlaceholder } from 'components';

export default function ProductCard({ onClick, name, image, actual_price }) {
  const handeClick = () => {
    onClick();
  };

  return (
    <section onClick={() => handeClick()} className="product-card">
      <ImagePlaceholder name={name} image={image} />
      <h3 className="product-card__name">{name}</h3>
      <div className="product-card__price">{actual_price}</div>
    </section>
  );
}
