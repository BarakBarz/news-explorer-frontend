import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

import './NewsCardList.css';

const NewsCardList = ({
  isLoggedIn,
  articles,
  count,
  isMain,
  onCardButtonClick,
  savedArticles,
}) => {
  return (
    <section className='news-cards-list'>
      <ul className='news-cards-list__cards'>
        {articles.slice(0, count).map((article, index) => (
          <NewsCard
            key={index}
            isLoggedIn={isLoggedIn}
            article={article}
            isMain={isMain}
            savedArticles={savedArticles}
            onCardButtonClick={onCardButtonClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default NewsCardList;
