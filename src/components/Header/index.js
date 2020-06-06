import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { itemsQuantitySelector } from 'store/selectors/cart';

import './style.css';
import logo from 'assets/logo.png';

import { toggleShowCart } from 'store/actions/cart';
import { toggleShowSearch } from 'store/actions/products';

export default function Header() {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector(itemsQuantitySelector);

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/products">
            <img src={logo} alt="Logo Fashioninsta" />
          </Link>
        </div>
        <div className="header__right">
          <div
            className="header__icon"
            onClick={() => dispatch(toggleShowSearch())}
          >
            <i className="fa fa-search"></i>
          </div>
          <div
            className="header__icon"
            onClick={() => dispatch(toggleShowCart())}
          >
            <i className="fa fa-shopping-cart"></i>
            {itemsQuantity > 0 && (
              <div className="icon__badge">{itemsQuantity}</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
