import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import { addToCart } from 'store/actions/cart';

import { ImagePlaceholder } from 'components';

export default function Product() {
  const dispatch = useDispatch();
  const [selectedSku, setSelectedSku] = useState(null);
  const { visitedProduct } = useSelector((state) => state.products);
  const {
    name,
    actual_price,
    image,
    installments,
    sizes,
    discount_percentage,
    regular_price,
    on_sale
  } = visitedProduct;

  const handleClickSize = (sku) =>
    sku === selectedSku ? setSelectedSku(null) : setSelectedSku(sku);

  const handleClickAdd = () => {
    if (selectedSku) {
      const cartItem = {
        ...visitedProduct,
        selectedSku
      };

      dispatch(addToCart(cartItem));
    }
  };

  return (
    <div className="container">
      <section className="product">
        <div className="product__image">
          {discount_percentage && (
            <div className="product__sale">{discount_percentage}</div>
          )}
          <ImagePlaceholder image={image} />
        </div>

        <div className="product__detail">
          <div className="product__name">{name}</div>
          <div className="product__info">
            {on_sale && (
              <span className="product__regular-price">{regular_price}</span>
            )}
            <span className="product__price">{actual_price}</span>
            <span className="product__installments">em até {installments}</span>
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
                    onClick={() =>
                      productSize.available && handleClickSize(productSize.sku)
                    }
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
