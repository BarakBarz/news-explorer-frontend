import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isLoggedIn, isMain, onSigninClick }) {
  const [backgroundMenu, setBackgroundMenu] =
    useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerTheme = isMain
    ? 'header'
    : 'header header_theme_saved-news';

  const headerMenuTheme = isMain
    ? 'header__menu-button'
    : 'header__menu-button header__menu-button_black';

  const overlay = isOverlay && (
    <div className='header__overlay'></div>
  );

  const handleClick = () => {
    setBackgroundMenu(!backgroundMenu);
    setToggleMenu(!toggleMenu);
    setIsOverlay(!isOverlay);
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth
  );

  // useEffect update component when screen size changes
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <header
      className={
        !backgroundMenu || screenWidth > 600
          ? headerTheme
          : `${headerTheme} header_theme_menu ${
              // check if in SavedNews for different font color
              !isMain &&
              toggleMenu &&
              ' header_theme_menu-black'
            }`
      }>
      <div className='header__container'>
        <Link className='header__link' to='/'>
          <h1 className='header__title'>NewsExplorer</h1>
        </Link>
        {(toggleMenu || screenWidth < 600) && (
          <button
            onClick={() => {
              toggleNav();
              handleClick();
            }}
            className={
              !toggleMenu
                ? headerMenuTheme
                : headerMenuTheme +
                  ' header__menu-button_close'
            }></button>
        )}
      </div>

      <Navigation
        isLoggedIn={isLoggedIn}
        isMain={isMain}
        screenWidth={screenWidth}
        toggleMenu={toggleMenu}
        onSigninClick={onSigninClick}
      />

      {screenWidth < 600 && overlay}
    </header>
  );
}

export default Header;
