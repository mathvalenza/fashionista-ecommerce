import React from 'react';

export default function Product(props) {
  return (
    <section className="product">
      Product {props.match.params.productId}
    </section>
  )
};
