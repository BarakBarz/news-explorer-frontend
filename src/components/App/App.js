import './App.css';
import Header from '../Header/Header';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  history,
  usePathname,
} from '../../utils/constants';
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

const App = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState(
    localStorage.getItem('token')
  );
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
  }, [isLoggedIn]);

  const handleSearchButton = (keyword) => {
    newsApi
      .getNewsArticles(encodeURIComponent(keyword))
      .then((articles) => console.log(articles))
      .catch((e) => console.log(e));
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const closeAllPopups = () => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
  };

  const switchBetweenPopups = () => {
    setIsSigninOpen(!isSigninOpen);
    setIsSignupOpen(!isSignupOpen);
  };

  const handleRegistration = ({ inputs }) => {
    auth
      .register(inputs)
      .then((res) => {
        if (res) {
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
        mainApi
          .getUserInfo(data.token)
          .catch((e) => {
            console.log(e);
          })
          .finally((res) => console.log('res', res));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally((res) => {
        closeAllPopups();
        setIsLoggedIn(true);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserToken({});
    setCurrentUser({});
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
            <Main
              onSearchClick={handleSearchButton}
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
    </CurrentUserProvider>
  );
};

export default App;

