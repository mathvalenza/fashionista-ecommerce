import React from 'react';

export default function Card({ onClick, name, image }) {
  function handeClick() {
    onClick(name);
  }

  return (
    <section onClick={handeClick} className="card">
      <div className="card__image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <h3 className="card__name">
        { name }
      </h3>
      <div className="card__price">
        R$ 199,90
      </div>
    </section>
  )
}