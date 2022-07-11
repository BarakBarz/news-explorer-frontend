import React, {
  useState,
  useEffect,
} from 'react';
import '../../blocks/overlay/overlay.css';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const [backgroundMenu, setBackgroundMenu] =
    useState(false);
  const [isOverlay, setIsOverlay] =
    useState(false);

  const overlay = isOverlay && (
    <div className='overlay'></div>
  );
  const handleClick = () => {
    setBackgroundMenu(!backgroundMenu);
    setIsOverlay(!isOverlay);
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
      <h1 className='header__title'>
        NewsExplorer
      </h1>
      <Navigation
        screenWidth={screenWidth}
        handleClick={handleClick}></Navigation>
      {screenWidth < 600 && overlay}
    </header>
  );
}

export default Header;
