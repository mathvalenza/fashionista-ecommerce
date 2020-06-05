import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import { Header, DrawerCart, DrawerSearch } from 'components';

import Routes from './routes';

export default function App() {
  const { showCart } = useSelector((state) => state.cart);
  const { showSearch } = useSelector((state) => state.products);
  const isDrawerActive = showCart || showSearch;

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div
          className={`app-content ${
            isDrawerActive ? 'app-content--not-focused' : ''
          }`}
        >
          <Routes />
          <DrawerCart />
          <DrawerSearch />
        </div>
      </div>
    </BrowserRouter>
  );
}
