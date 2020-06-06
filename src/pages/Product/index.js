import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import { addToCart } from 'store/actions/cart';

import { ImagePlaceholder } from 'components';

export default function Product() {
  const dispatch = useDispatch();
  const [selectedSku, setSelectedSku] = useState(null);
  const { visitedProduct } = useSelector((state) => state.products);
  const { name, actual_price, image, installments, sizes } = visitedProduct;

  const handleClickSize = (sku) =>
    sku === selectedSku ? setSelectedSku(null) : setSelectedSku(sku);

  const handleClickAdd = () => {
    if (!selectedSku) return true;

    const cartItem = {
      ...visitedProduct,
      selectedSku
    };

    dispatch(addToCart(cartItem));
  };

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
                const buttonClasses =
                  'product__size-option' +
                  `${
                    productSize.available
                      ? ''
                      : ' product__size-option--disabled'
                  }` +
                  `${
                    productSize.sku === selectedSku
                      ? ' product__size-option--active'
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

          <button
            className={
              'product__button' +
              `${selectedSku ? '' : ' product__button--disabled'}`
            }
            onClick={handleClickAdd}
          >
            Adicionar à sacola
          </button>
        </div>
      </section>
    </div>
  );
}
