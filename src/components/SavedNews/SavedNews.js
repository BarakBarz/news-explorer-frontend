import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

const SavedNews = ({ isLoggedIn, isMain, savedArticles, onDeleteClick }) => {
  const isSavedNewsListEmpty = savedArticles.length === 0;

  return (
    <main>
      <SavedNewsHeader savedArticles={savedArticles} />
      {isSavedNewsListEmpty ? (
        <></>
      ) : (
        <NewsCardList
          articles={savedArticles}
          count={savedArticles.length}
          isLoggedIn={isLoggedIn}
          isMain={isMain}
          onCardButtonClick={onDeleteClick}
        />
      )}
    </main>
  );
};

export default SavedNews;
