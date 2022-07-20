import './App.css';
import Header from '../Header/Header';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePathname } from '../../utils/constants';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import background from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.png';
import Register from '../Register/Register';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(true);
  const isMain = usePathname() === '/';

  const handleSigninClick = () => {
    console.log(2);
    setIsSignUpOpen(true);
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
    setIsSignUpOpen(false);
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
        onSigninClick={handleSigninClick}
      />
      <Switch>
        <Route exact path='/'>
          <Main
            isLoggedIn={isLoggedIn}
            preloader={preloader}
            isMain={isMain}
          />
          <Register
            isOpen={isSignUpOpen}
            onClose={closeAllPopups}
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

