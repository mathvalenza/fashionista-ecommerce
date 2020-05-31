import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './style.css';

import { toggleShowCart } from 'store/actions/cart';

import logo from 'assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  function handleClickSearch() {
    console.log('handleClickSearch');
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/products">
            <img src={logo} alt="Logo Fashioninsta" />
          </Link>
        </div>
        <div className="header__right">
          <div className="header__icon" onClick={handleClickSearch}>
            <i className="fa fa-search"></i>
          </div>
          <div
            className="header__icon"
            onClick={() => dispatch(toggleShowCart())}
          >
            <i className="fa fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
