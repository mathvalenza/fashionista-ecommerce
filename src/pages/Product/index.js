import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './style.css';

import { ImagePlaceholder } from 'components';

export default function Product() {
  const [selectedSizeSku, setSeltectedSizeSku] = useState(null);
  const { selectedProduct } = useSelector((state) => state.products);
  const { name, actual_price, image, installments, sizes } = selectedProduct;

  const handleClickSize = (sku) => {
    sku === selectedSizeSku
      ? setSeltectedSizeSku(null)
      : setSeltectedSizeSku(sku);
  };

  const handleClickAdd = () =>
    console.log('adicionar à sacola ', selectedSizeSku);

  return (
    <div className="container">
      <section className="product">
        <div className="product__image">
          <ImagePlaceholder image={image} />
        </div>

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
            {sizes &&
              sizes.map((productSize) => {
                const buttonClasses = `product__size-option ${
                  productSize.available ? '' : 'product__size-option--disabled'
                }
                  ${
                    productSize.sku === selectedSizeSku
                      ? 'product__size-option--active'
                      : ''
                  }`;

                return (
                  <button
                    key={productSize.sku}
                    className={buttonClasses}
                    onClick={() => handleClickSize(productSize.sku)}
                  >
                    {productSize.size}
                  </button>
                );
              })}
          </div>

          <button className="product__button" onClick={handleClickAdd}>
            Adicionar à sacola
          </button>
        </div>
      </section>
    </div>
  );
}
