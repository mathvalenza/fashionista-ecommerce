import React from 'react';

export default function Card(props) {
  function handeClick() {
    props.onClick(props.id);
  }

  return (
    <section onClick={handeClick} className="card">
      <div className="card__image">
        <img
          src="https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
          alt="Foto do produto"
        />
      </div>
      <h3 className="card__name">
        Vestido transpasse bow 
      </h3>
      <div className="card__price">
        R$ 199,90
      </div>
    </section>
  )
}