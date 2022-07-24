import React from 'react';
import { Link } from 'react-router-dom';
import logoutIconWhite from '../../images/logout-icon-white.svg';
import logoutIconBlack from '../../images/logout-icon-black.svg';
import './Navigation.css';

function Navigation({
  toggleMenu,
  screenWidth,
  isMain,
  isLoggedIn,
  onSigninClick,
}) {
  const currentUser = { name: 'Barak' };

  const logoutElement = (
    <>
      <p className='nav__button-text'>{currentUser.name}</p>
      <img
        alt='logout button'
        src={isMain ? logoutIconWhite : logoutIconBlack}
      />
    </>
  );

  const navButtonContent = isLoggedIn ? (
    logoutElement
  ) : (
    <p className='nav__button-text nav__button-text_signed-out'>
      Sign in
    </p>
  );
  return (
    <nav className='nav'>
      {(toggleMenu || screenWidth > 600) && (
        <ul className='nav__list'>
          {isMain ? (
            <>
              <li className='nav__list-item'>
                <Link
                  to='/'
                  className='nav__link nav__link_active'>
                  Home
                </Link>
              </li>
              {isLoggedIn && (
                <li className='nav__list-item'>
                  <Link
                    to='/saved-news'
                    className='nav__link'>
                    Saved articles
                  </Link>
                </li>
              )}
            </>
          ) : (
            <>
              <li className='nav__list-item'>
                <Link
                  to='/'
                  className='nav__link nav__link_black'>
                  Home
                </Link>
              </li>
              <li className='nav__list-item'>
                <Link
                  to='/saved-news'
                  className='nav__link nav__link_black nav__link_black_active'>
                  Saved articles
                </Link>
              </li>
            </>
          )}

          <li className='nav__list-item'>
            <button
              onClick={
                isLoggedIn
                  ? () => {
                      console.log('Log out logic');
                    }
                  : onSigninClick
              }
              className={
                isMain
                  ? 'nav__button'
                  : 'nav__button nav__button_black'
              }>
              {navButtonContent}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
