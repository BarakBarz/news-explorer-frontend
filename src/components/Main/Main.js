import React from 'react';
import About from '../About/About';
import PreLoader from '../PreLoader/PreLoader';
import SearchBox from '../SearchBox/SearchBox.js';
import SearchResults from '../SearchResults/SearchResults';

const Main = ({
  isLoggedIn,
  preloader,
  isMain,
  onSearchClick,
  articles,
  placeholder,
  showSearchResults,
}) => {
  return (
    <main>
      <SearchBox
        placeholder={placeholder}
        onSearchClick={onSearchClick}
      />
      {showSearchResults && (
        <>
          {!preloader ? (
            <SearchResults
              isLoggedIn={isLoggedIn}
              isMain={isMain}
              articles={articles}
            />
          ) : (
            <PreLoader />
          )}
        </>
      )}
      <About />
    </main>
  );
};

export default Main;
