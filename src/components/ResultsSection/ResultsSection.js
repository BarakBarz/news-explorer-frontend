import React from 'react';
// import cards from '../../data/cards';
import Card from '../Card/Card';
import NothingFound from '../NothingFound/NothingFound';
import './ResultsSection.css';

function ResultsSection() {
  const cards = undefined;
  return (
    <section className='results'>
      {!cards ? (
        <NothingFound></NothingFound>
      ) : (
        <>
          <h2 className='results__title'>Search results</h2>
          <ul className='results__list'>
            {cards.map((card, index) => (
              <Card
                key={index}
                card={card}
                // onCardClick={onCardClick}
                // onDeleteButtonClick={onCardDelete}
                // onLikeButtonClick={onCardLike}
              />
            ))}
          </ul>
          <button className='results__more-button'>Show More</button>
        </>
      )}
    </section>
  );
}

export default ResultsSection;
