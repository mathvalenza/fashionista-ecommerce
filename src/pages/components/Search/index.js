import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { searchProducts, toggleShowSearch } from 'store/actions/products';

import { Drawer } from 'components';

export default function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { filteredProducts, showSearch } = useSelector(
    (state) => state.products
  );

  const handleChangeInput = (event) => {
    setSearch(event.target.value);

    // TODO: não chamar a action a cada tecla, esperar o usuário parar de digitar
    dispatch(searchProducts(event.target.value));
  };

  return (
    <Drawer
      title="Buscar produtos"
      active={showSearch}
      close={() => dispatch(toggleShowSearch())}
    >
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
          {filteredProducts.map((product, index) => (
            <h3 key={index}>{product.name}</h3>
          ))}
        </div>
      </section>
    </Drawer>
  );
}
