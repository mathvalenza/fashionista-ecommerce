import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../services';

import ProductCard from '../components/ProductCard';

const Home = ({ history, stateProducts, dispatch }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const products = await getProducts();
      setProducts(products);
    }

    loadProducts().then(() => setIsLoading(false));
  }, [products]);

  function handleClick(name) {
    history.push(`/product/${name}`, { name });
  }

  return (
    <div className="container">
      <div className="products">
        <h3 className="products__title">22 itens {stateProducts[0].name}</h3>
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
    </div>
  );
};

export default connect((state) => ({ stateProducts: state.home.products }))(
  Home
);
