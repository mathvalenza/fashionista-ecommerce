import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';

import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="app">
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}
