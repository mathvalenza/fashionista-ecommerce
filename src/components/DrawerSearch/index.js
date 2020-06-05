import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './style.css';

import {
  searchProducts,
  toggleShowSearch,
  setSelectedProduct
} from 'store/actions/products';

import { Drawer, ImagePlaceholder } from 'components';

export default function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { filteredProducts, showSearch } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(searchProducts(search));
  }, [dispatch, search]);

  const handleChangeInput = (event) => setSearch(event.target.value);

  const handleClose = () => {
    dispatch(toggleShowSearch());
    setSearch('');
  };

  const handleClickProduct = (product) => {
    dispatch(setSelectedProduct(product));

    history.push(`/product/${product.id}`);

    handleClose();
  };

  return (
    <Drawer title="Buscar produtos" active={showSearch} close={handleClose}>
      <section className="search">
        <div className="search__form">
          <input
            className="search__input"
            placeholder="Pesquise por um produto..."
            value={search}
            onChange={(event) => handleChangeInput(event)}
          />
        </div>
        <div className="search__content">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <section
                key={index}
                className="filtered-product"
                onClick={() => handleClickProduct(product)}
              >
                <div className="filtered-product__image">
                  <ImagePlaceholder image={product.image} />
                </div>
                <div className="filtered-product__name">{product.name}</div>
                <div>
                  <p className="filtered-product__price">
                    {product.actual_price}
                  </p>
                  <p className="filtered-product__installments">
                    {product.installments}
                  </p>
                </div>
              </section>
            ))
          ) : (
            <div className="search--empty">
              <p>Nenhum produto encontrado :(</p>
            </div>
          )}
        </div>
      </section>
    </Drawer>
  );
}
