import React, { useEffect, useState } from 'react';

import { getProducts } from '../services/api';

import { ProductCard, Drawer } from '../components';

export default function Products({ history, stateProducts, dispatch }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    loadProducts().then(() => setIsLoading(false));
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
