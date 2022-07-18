import React from 'react';
import cards from '../../data/cards';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

const SavedNews = ({ isLoggedIn, isMain }) => {
  const cardss = cards;

  return (
    <>
      <SavedNewsHeader />
      <NewsCardList
        deck={cardss}
        count={cardss.length}
        isLoggedIn={isLoggedIn}
        isMain={isMain}
      />
    </>
  );
};

export default SavedNews;