import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Routes from './routes';

export default function App() {
  const HeaderWithRouter = withRouter(Header);

  return (
    <BrowserRouter>
      <HeaderWithRouter />
      <div className="app">
        <Routes />
      </div>
    </BrowserRouter>
  );
}
