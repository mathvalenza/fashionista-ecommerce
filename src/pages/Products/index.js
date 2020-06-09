import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

import { setProducts, setSelectedProduct } from 'store/actions/products';
import { sortSelector } from 'store/selectors/products';

import Card from './Card';

export default function Products({ history, stateProducts }) {
  const { isLoading } = useSelector((state) => state.products);
  const [selectedSort, setSelectedSort] = useState('');
  const productsList = useSelector(sortSelector(selectedSort));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  function handleClick(product) {
    history.push(`/product/${product.id}`);

    dispatch(setSelectedProduct(product));
  }

  function handleSort(event) {
    setSelectedSort(event.target.value);
  }

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loading">
          <div className="loading__content">
            <div className="loading__message">Carregando...</div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="products">
            <div className="products__title">
              <h3 className="products__quantity">
                Exibindo {productsList.length} itens
              </h3>
              <div className="sort">
                <select
                  className="sort__select"
                  value={selectedSort}
                  onChange={handleSort}
                >
                  <option value="" disabled>
                    Ordenar
                  </option>
                  <option value="padrao">Padrão</option>
                  <option value="preco">Menor preço</option>
                  <option value="desconto">Maior desconto</option>
                </select>
              </div>
            </div>
            <section className="products__list" data-testid="products-list">
              {productsList &&
                productsList.map((product, index) => (
                  <div key={index} className="products__item">
                    <Card {...product} onClick={() => handleClick(product)} />
                  </div>
                ))}
            </section>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
