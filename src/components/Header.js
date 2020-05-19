import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/products">
            <img src={logo} alt="Logo Fashioninsta"/>
          </Link>
        </div>
        <div className="header__right">
          <div className="header__icon">
            <i className="fa fa-search"></i>
          </div>
          <div className="header__icon">
            <i className="fa fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </header>
  )
};
