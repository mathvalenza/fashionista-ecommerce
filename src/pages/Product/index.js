import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';

import { ImagePlaceholder } from 'components';

export default function Product() {
  const { selectedProduct } = useSelector((state) => state.products);
  const { name, actual_price, image, installments } = selectedProduct;
  console.log('selectedProduct: ', selectedProduct);

  return (
    <div className="container">
      <section className="product">
        <ImagePlaceholder name="Nomee" image={image} />
        <div className="product__detail">
          <div className="product__name">{name}</div>
          <div className="product__price">
            <span className="product__price--black">{actual_price}</span>
            <span>em até {installments}</span>
          </div>
          <div className="product__size">
            <span>Escolha o tamanho</span>
          </div>
          <div className="product__size-options">
            <button className="product__size-option">P</button>
            <button className="product__size-option">M</button>
            <button className="product__size-option">G</button>
          </div>
          <button className="product__button">Adicionar à sacola</button>
        </div>
      </section>
    </div>
  );
}
