import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { searchProducts, toggleShowSearch } from 'store/actions/products';

import { Drawer, ImagePlaceholder } from 'components';

export default function Search() {
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
              <section key={index} className="filtered-product">
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
