import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import PreLoader from '../PreLoader/PreLoader';
import SearchBox from '../SearchBox/SearchBox.js';
import SearchResults from '../SearchResults/SearchResults';

const Main = ({ isLoggedIn, preloader, isMain }) => {
  return (
    <>
      <SearchBox />
      {!preloader ? (
        <SearchResults
          isLoggedIn={isLoggedIn}
          isMain={isMain}
        />
      ) : (
        <PreLoader />
      )}
      <About />
    </>
  );
};

export default Main;
