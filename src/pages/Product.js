import React from 'react';

export default function Product(props) {
  return (
    <h1>Product {props.match.params.productId}</h1>
  )
};
