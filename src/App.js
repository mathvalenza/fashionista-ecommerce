import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import Header from './pages/components/Header';
import Cart from './pages/components/Cart';
import Search from './pages/components/Search';

import Routes from './routes';

export default function App() {
  const { showCart } = useSelector((state) => state.cart);
  const { showSearch } = useSelector((state) => state.search);
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
          <Cart />
          <Search />
        </div>
      </div>
    </BrowserRouter>
  );
}
