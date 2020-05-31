import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';

import { toggleShowSearch } from 'store/actions/search';

import { Drawer } from 'components';

export default function Search() {
  const dispatch = useDispatch();
  const { showSearch } = useSelector((state) => state.search);

  return (
    <Drawer
      title="Buscar produtos"
      active={showSearch}
      close={() => dispatch(toggleShowSearch())}
    >
      <div>SEARCH</div>
    </Drawer>
  );
}
