import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Header from './pages/components/Header';
import Cart from './pages/components/Cart';
import Search from './pages/components/Search';

import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes />
        <Cart />
        <Search />
      </div>
    </BrowserRouter>
  );
}
