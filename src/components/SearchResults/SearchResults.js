import React, { useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import NothingFound from '../NothingFound/NothingFound';
import './SearchResults.css';

const SearchResults = React.memo(
  ({
    isLoggedIn,
    isMain,
    articles,
    showNothingFound,
    showServerError,
    onSaveClick,
    savedArticles,
  }) => {
    const [count, setCount] = useState(3);

    const resultsTitle = showServerError
      ? 'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.'
      : 'Search results';

    return (
      <section className='results'>
        {showNothingFound ? (
          <NothingFound></NothingFound>
        ) : (
          <>
            <h2 className='results__title'>{resultsTitle}</h2>
            {!showServerError && (
              <NewsCardList
                onCardButtonClick={onSaveClick}
                articles={articles}
                savedArticles={savedArticles}
                isLoggedIn={isLoggedIn}
                isMain={isMain}
                count={count}
              />
            )}

            {count < articles.length && !showServerError && (
              <button
                className='results__more-button'
                onClick={() => setCount(count + 3)}>
                Show More{' '}
              </button>
            )}
          </>
        )}
      </section>
    );
  }
);

export default SearchResults;
