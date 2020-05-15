import React from 'react';

import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo}  alt="Logo Fashioninsta"/>
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
