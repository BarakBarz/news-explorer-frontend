import React, { useEffect, useState } from 'react';
import cards from '../../data/cards';
import NewsCardList from '../NewsCardList/NewsCardList';
import NothingFound from '../NothingFound/NothingFound';
import './SearchResults.css';

const SearchResults = React.memo(
  ({ isLoggedIn, isMain }) => {
    const cardss = cards;

    const [deck, setDeck] = useState([]);
    const [count, setCount] = useState(3);

    useEffect(() => {
      if (!cardss) {
        setDeck([]);
        return;
      } else if (deck.length === 0 && cardss.length > 0) {
        setDeck(...deck, cardss);
      }
    }, [count]);

    return (
      <section className='results'>
        {!cards ? (
          <NothingFound></NothingFound>
        ) : (
          <>
            <h2 className='results__title'>
              Search results
            </h2>
            <NewsCardList
              deck={cardss}
              isLoggedIn={isLoggedIn}
              isMain={isMain}
              count={count}
            />

            {count < cards.length && (
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
