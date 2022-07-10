import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='nav'>
      <a className='nav__link nav__link_active'>
        Home
      </a>
      <a className='nav__link nav__signin'>
        Sign in
      </a>
    </nav>
  );
}

export default Navigation;
