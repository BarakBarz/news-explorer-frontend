import Header from '../Header/Header';
import { Switch, Route, useHistory } from 'react-router-dom';
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
import './App.css';

const App = () => {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSigninOpen, setIsSigninOpen] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [placeholder, setPlaceholder] = useState('Enter Topic');
  const [showNothingFound, setShowNothingFound] = useState(false);

  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const [showSearchResults, setShowSearchResults] = useState(false);

  const [showServerError, setShowServerError] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState(
    localStorage.getItem('keyword')
  );
  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));
  // localStorage.removeItem('articles');
  const [articles, setArticles] = useState(
    JSON.parse(localStorage.getItem('articles'))
  );

  const isMain = usePathname() === '/';

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

    if (isLoggedIn) {
      getUserSavedArticles().then((res) => {
        setSavedArticles(res.reverse());
      });
    }
  }, [isLoggedIn, userToken]);

  useEffect(() => {
    if (articles) {
      setShowSearchResults(true);
    }
  }, [articles]);

  const closeAllPopups = () => {
    setIsSigninOpen(false);
    setIsSignupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const switchBetweenPopups = () => {
    if (!isSuccessPopupOpen) {
      setIsSigninOpen(!isSigninOpen);
      setIsSignupOpen(!isSignupOpen);
    } else {
      setIsSigninOpen(!isSigninOpen);
      setIsSuccessPopupOpen(!isSuccessPopupOpen);
    }
  };

  const handleSignupClick = () => {
    if (isRegistered) {
      setIsSigninOpen(true);
      return;
    }
    setIsSignupOpen(true);
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
          setIsLoggedIn(true);
          closeAllPopups();
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  };

  const clearAllUserData = () => {
    localStorage.removeItem('token');
    setUserToken(undefined);
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleLogout = () => {
    clearAllUserData();
    setIsRegistered(true);
    history.push('/');
  };

  const handleSearchButton = (keyword) => {
    const upperCaseKeyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);

    localStorage.setItem('keyword', upperCaseKeyword);
    setCurrentKeyword(upperCaseKeyword);
    localStorage.removeItem('articles');
    setArticles(null);

    if (showServerError === true) {
      setShowServerError(false);
    }

    if (!keyword) {
      setPlaceholder('Please enter a keyword');
      setShowSearchResults(false);
      setArticles(null);
      return;
    }

    setPlaceholder('Enter Topic');
    setShowNothingFound(false);
    setShowSearchResults(true);
    setPreloader(true);

    newsApi
      .getNewsArticles(encodeURIComponent(keyword))
      .then((data) => {
        if (data.totalResults === 0) {
          return setShowNothingFound(true);
        }

        setArticles(data.articles);

        localStorage.setItem('articles', JSON.stringify(data.articles));
      })
      .catch((e) => {
        console.log(e);
        setShowServerError(true);
      })
      .finally(() => setPreloader(false));
  };

  const getUserSavedArticles = () => {
    return mainApi.getArticleCollection(userToken).then((res) => {
      return res;
    });
  };

  const handleSaveArticleButton = async (
    isSaved,
    { title, text, source, link, date, image, _id }
  ) => {
    if (!isSaved) {
      mainApi
        .saveArticle(
          { keyword: currentKeyword, title, text, source, link, date, image },
          userToken
        )
        .then((savedArticle) => {
          setSavedArticles((savedArticles) => [savedArticle, ...savedArticles]);
        })
        .catch((e) => {
          console.log(e);
        });
      return;
    }

    mainApi
      .removeSavedArticle(_id, userToken)
      .then((removedArticle) => {
        const newSavedArticle = savedArticles.filter(
          (currentArticle) => currentArticle._id !== removedArticle._id
        );
        setSavedArticles(newSavedArticle);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <CurrentUserProvider value={currentUser}>
      <div className='wrapper'>
        {isMain && (
          <img className='background' src={background} alt='background' />
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
              onSaveClick={handleSaveArticleButton}
              isMain={isMain}
              articles={articles}
              preloader={preloader}
              isLoggedIn={isLoggedIn}
              placeholder={placeholder}
              savedArticles={savedArticles}
              showServerError={showServerError}
              showNothingFound={showNothingFound}
              showSearchResults={showSearchResults}
            />
          </Route>
          <Route exact path='/saved-news'>
            <SavedNews
              isLoggedIn={isLoggedIn}
              isMain={isMain}
              savedArticles={savedArticles}
              onDeleteClick={handleSaveArticleButton}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserProvider>
  );
};

export default App;

