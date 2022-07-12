import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ toggleMenu, screenWidth }) {
  return (
    <nav className='nav'>
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
