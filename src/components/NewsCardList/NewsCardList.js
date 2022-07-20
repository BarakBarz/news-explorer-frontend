import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';

const NewsCardList = ({
  isLoggedIn,
  deck,
  count,
  isMain,
}) => {
  return (
    <section className='news-cards-list'>
      <ul className='news-cards-list__cards'>
        {deck.slice(0, count).map((card, index) => (
          <NewsCard
            key={index}
            isLoggedIn={isLoggedIn}
            card={card}
            isMain={isMain}
          />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardList;
