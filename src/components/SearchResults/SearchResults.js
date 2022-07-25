import React, { useEffect, useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import NothingFound from '../NothingFound/NothingFound';
import './SearchResults.css';

const SearchResults = React.memo(
  ({ isLoggedIn, isMain, articles }) => {
    const [count, setCount] = useState(3);

    return (
      <section className='results'>
        {!articles ? (
          <NothingFound></NothingFound>
        ) : (
          <>
            <h2 className='results__title'>
              Search results
            </h2>
            <NewsCardList
              articles={articles}
              isLoggedIn={isLoggedIn}
              isMain={isMain}
              count={count}
            />

            {count < articles.length && (
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
