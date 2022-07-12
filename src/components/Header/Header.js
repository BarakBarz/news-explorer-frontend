import React, {
  useState,
  useEffect,
} from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const [backgroundMenu, setBackgroundMenu] =
    useState(false);
  const [isOverlay, setIsOverlay] =
    useState(false);
  const [toggleMenu, setToggleMenu] =
    useState(false);

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

    window.addEventListener(
      'resize',
      changeWidth
    );

    return () => {
      window.removeEventListener(
        'resize',
        changeWidth
      );
    };
  }, []);

  return (
    <header
      className={
        !backgroundMenu || screenWidth > 600
          ? 'header'
          : 'header header_theme_menu'
      }>
      <div className='header__container'>
        <h1 className='header__title'>
          NewsExplorer
        </h1>
        {(toggleMenu || screenWidth < 600) && (
          <button
            onClick={() => {
              toggleNav();
              handleClick();
            }}
            className={
              !toggleMenu
                ? 'header__menu-button'
                : 'header__menu-button header__menu-button_close'
            }></button>
        )}
      </div>

      <Navigation
        screenWidth={screenWidth}
        toggleMenu={toggleMenu}></Navigation>

      {screenWidth < 600 && overlay}
    </header>
  );
}

export default Header;
