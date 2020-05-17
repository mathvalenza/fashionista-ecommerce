import React from 'react';

export default function ProductCard({ onClick, name, image, actual_price }) {
  function handeClick() {
    onClick(name);
  }

  return (
    <section onClick={handeClick} className="product-card">
      <div className="product-card__image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <h3 className="product-card__name">
        { name }
      </h3>
      <div className="product-card__price">
        { actual_price }
      </div>
    </section>
  )
}