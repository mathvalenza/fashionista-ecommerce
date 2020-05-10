import React from 'react';
import './App.css';

import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Routes />
      </div>
    </>
  );
}
