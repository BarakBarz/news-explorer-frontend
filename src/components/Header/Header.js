import React, {
  useState,
  useEffect,
} from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const [backgroundMenu, setBackgroundMenu] =
    useState(false);

  const handleClick = () => {
    setBackgroundMenu(!backgroundMenu);
  };

  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth
  );

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
      <h1 className='header__title'>
        NewsExplorer
      </h1>
      <Navigation
        screenWidth={screenWidth}
        handleClick={handleClick}></Navigation>
    </header>
  );
}

export default Header;
