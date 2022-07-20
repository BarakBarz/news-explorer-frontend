import React from 'react';
import About from '../About/About';
import PreLoader from '../PreLoader/PreLoader';
import SearchBox from '../SearchBox/SearchBox.js';
import SearchResults from '../SearchResults/SearchResults';

const Main = ({ isLoggedIn, preloader, isMain }) => {
  return (
    <main>
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
    </main>
  );
};

export default Main;
