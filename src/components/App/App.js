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
import background from '../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.png';
import Register from '../Register/Register';
import Login from '../Login/Login';
import newsApi from '../../utils/NewsApi';
import * as auth from '../../utils/auth';
import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import PopupSuccess from '../PopupSuccess/PopupSuccess';

const App = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] =
    useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(
    localStorage.getItem('token')
  );
  const [articles, setArticles] = useState(
    localStorage.getItem('articles')
  );

  console.log({ articles });

  const isMain = usePathname() === '/';

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

  useEffect(() => {
    if (userToken) {
      auth
        .checkToken(userToken)
        .then((res) => {
          setCurrentUser(res.name);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn, userToken, articles]);

  const handleSearchButton = (keyword) => {
    setPreloader(true);
    newsApi
      .getNewsArticles(encodeURIComponent(keyword))
      .then((data) => {
        setArticles(data.articles);
        localStorage.setItem('articles', data.articles);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setPreloader(false));
  };

  const handleSignupClick = () => {
    if (isRegistered) {
      setIsSigninOpen(true);
      return;
    }
    setIsSignupOpen(true);
  };

  const closeAllPopups = () => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const switchBetweenPopups = () => {
    debugger;
    if (!isSuccessPopupOpen) {
      setIsSigninOpen(!isSigninOpen);
      setIsSignupOpen(!isSignupOpen);
    } else {
      setIsSigninOpen(!isSigninOpen);
      setIsSuccessPopupOpen(!isSuccessPopupOpen);
    }
  };

  const handleRegistration = ({ inputs }) => {
    auth
      .register(inputs)
      .then((res) => {
        if (res._id) {
          setIsRegistered(true);
          setIsSignupOpen(false);
          setIsSuccessPopupOpen(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleLogin = ({ inputs }) => {
    auth
      .authorize(inputs)
      .then((data) => {
        if (data.token) {
          setUserToken(data.token);
          localStorage.setItem('token', data.token);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        closeAllPopups();
        setIsLoggedIn(true);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserToken(undefined);
    setCurrentUser(null);
    setIsLoggedIn(false);
    history.push('/');
  };

  return (
    <CurrentUserProvider value={currentUser}>
      <div className='wrapper'>
        {isMain && (
          <img
            className='background'
            src={background}
            alt='background'
          />
        )}
        <Header
          onLogoutClick={handleLogout}
          isLoggedIn={isLoggedIn}
          isMain={isMain}
          onSigninClick={handleSignupClick}
        />
        <Switch>
          <Route exact path='/'>
            <Register
              isRegistered={isRegistered}
              isOpen={isSignupOpen}
              onClose={closeAllPopups}
              switchPopups={switchBetweenPopups}
              onSubmit={handleRegistration}
            />
            <Login
              isOpen={isSigninOpen}
              onClose={closeAllPopups}
              switchPopups={switchBetweenPopups}
              onSubmit={handleLogin}
            />
            <PopupSuccess
              onClose={closeAllPopups}
              buttonText='Sign in'
              title='Registration successfully completed!'
              name='success'
              isOpen={isSuccessPopupOpen}
              switchPopups={switchBetweenPopups}
            />
            <Main
              onSearchClick={handleSearchButton}
              isLoggedIn={isLoggedIn}
              preloader={preloader}
              isMain={isMain}
              articles={articles}
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
    </CurrentUserProvider>
  );
};

export default App;

