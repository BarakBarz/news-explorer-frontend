import React, { useEffect, useState } from 'react';
import cards from '../../data/cards';
import Card from '../Card/Card';
import NothingFound from '../NothingFound/NothingFound';
import './ResultsSection.css';

const ResultsSection = React.memo(({ isLoggedIn }) => {
  const cardss = cards;

  const [deck, setDeck] = useState([]);
  const [count, setCount] = useState(6);

  useEffect(() => {
    if (!cardss) {
      console.log(0);
      setDeck([]);
      return;
    } else if (deck.length === 0 && cardss.length > 0) {
      console.log(1);
      setDeck(...deck, cards);
    }
  }, [count]);

  return (
    <section className='results'>
      {!cards ? (
        <NothingFound></NothingFound>
      ) : (
        <>
          <h2 className='results__title'>Search results</h2>
          <ul className='results__list'>
            {deck.slice(0, count).map((card, index) => (
              <Card
                isLoggedIn={isLoggedIn}
                key={index}
                id={index}
                card={card}
              />
            ))}
          </ul>
          {count < cards.length && (
            <button
              className='results__more-button'
              onClick={() => setCount(count + 3)}>
              Show More
            </button>
          )}
        </>
      )}
    </section>
  );
});

export default ResultsSection;
