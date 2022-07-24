import './App.css';
import Header from '../Header/Header';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePathname } from '../../utils/constants';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import background from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.png';
import Register from '../Register/Register';
import Login from '../Login/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(true);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const isMain = usePathname() === '/';

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () =>
      document.removeEventListener(
        'keydown',
        closeByEscape
      );
  }, []);

  const closeAllPopups = () => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
  };

  const switchBetweenPopups = () => {
    setIsSigninOpen(!isSigninOpen);
    setIsSignupOpen(!isSignupOpen);
  };

  return (
    <div className='wrapper'>
      {isMain && (
        <img
          className='background'
          src={background}
          alt='background'
        />
      )}
      <Header
        isLoggedIn={isLoggedIn}
        isMain={isMain}
        onSigninClick={handleSignupClick}
      />
      <Switch>
        <Route exact path='/'>
          <Register
            isOpen={isSignupOpen}
            onClose={closeAllPopups}
            switchPopups={switchBetweenPopups}
          />
          <Login
            isOpen={isSigninOpen}
            onClose={closeAllPopups}
            switchPopups={switchBetweenPopups}
          />
          <Main
            isLoggedIn={isLoggedIn}
            preloader={preloader}
            isMain={isMain}
          />
        </Route>
        <Route exact path='/saved-news'>
          <SavedNews
            isLoggedIn={isLoggedIn}
            isMain={isMain}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

