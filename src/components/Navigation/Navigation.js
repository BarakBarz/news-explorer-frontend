import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({
  handleClick,
  screenWidth,
}) {
  const [toggleMenu, setToggleMenu] =
    useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className='nav'>
      {(toggleMenu || screenWidth < 600) && (
        <button
          onClick={() => {
            toggleNav();
            handleClick();
          }}
          className={
            !toggleMenu
              ? 'nav__menu-button'
              : 'nav__menu-button nav__menu-button_close'
          }></button>
      )}
      {(toggleMenu || screenWidth > 600) && (
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link
              to='/'
              className='nav__link nav__link_active'>
              Home
            </Link>
          </li>
          <li className='nav__list-item'>
            <button className='nav__button'>
              Sign in
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
