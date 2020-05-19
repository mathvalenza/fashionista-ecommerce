import React, { useEffect, useState } from 'react';

import { getProducts } from '../services';

import ProductCard from '../components/ProductCard';

export default function Home({ history }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const products = await getProducts();
      setProducts(products);

      console.log('products: ', products);
    }

    loadProducts().then(() => setIsLoading(false));
  }, [])


  function handleClick(name) {
    history.push(`/product/${name}`, { name });
  }

  return (
    <div className="container">
      <div className="products">
        <h3 className="products__title">22 itens</h3>
        <section className="products__cards">
          { isLoading
            ? <h1>Carregando...</h1>
            : products && products.map((product, index) => <ProductCard key={index} {...product} onClick={handleClick}/>)
          }
        </section>
      </div>
    </div>
  )
};
