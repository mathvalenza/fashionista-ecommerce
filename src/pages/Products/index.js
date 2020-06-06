import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import { setProducts, setSelectedProduct } from 'store/actions/products';

import Card from './Card';

export default function Products({ history, stateProducts }) {
  const { productsList, isLoading } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  function handleClick(product) {
    history.push(`/product/${product.id}`);

    dispatch(setSelectedProduct(product));
  }

  return (
    <div className="container">
      <div className="products">
        {isLoading ? (
          <h1>Carregando...</h1>
        ) : (
          <React.Fragment>
            <h3 className="products__title">{productsList.length} itens</h3>
            <section className="products__list">
              {productsList &&
                productsList.map((product, index) => (
                  <div key={index} className="products__item">
                    <Card {...product} onClick={() => handleClick(product)} />
                  </div>
                ))}
            </section>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
