import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setProducts } from './actions';

import { getProducts } from '../../services/api';

import { ProductCard, Drawer } from '../../components';

export default function Products({ history, stateProducts }) {
  const store = useSelector((state) => state);
  const products = store.products;
  const dispatch = useDispatch();
  console.log('store: ', store);
  const [isLoading, setIsLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    getProducts().then((products) => {
      // dispatch(setProducts(products));
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(name) {
    history.push(`/product/${name}`, { name });
  }

  return (
    <div className="container">
      <div className="products">
        <h3 className="products__title">
          {products ? products.length : 0} itens
          <button onClick={() => setShowDrawer(!showDrawer)}>
            Toggle drawer
          </button>
        </h3>
        <section className="products__cards">
          {isLoading ? (
            <h1>Carregando...</h1>
          ) : (
            products &&
            products.map((product, index) => (
              <ProductCard key={index} {...product} onClick={handleClick} />
            ))
          )}
        </section>
      </div>
      {<Drawer active={showDrawer} close={() => setShowDrawer(false)} />}
    </div>
  );
}
