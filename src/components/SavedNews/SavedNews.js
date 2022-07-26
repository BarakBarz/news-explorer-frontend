import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNews.css';

const SavedNews = ({ isLoggedIn, isMain, collection }) => {
  const isSavedNewsListEmpty = collection.length === 0;

  return (
    <main>
      <SavedNewsHeader collection={collection} />
      {isSavedNewsListEmpty ? (
        <></>
      ) : (
        <NewsCardList
          articles={collection}
          count={collection.length}
          isLoggedIn={isLoggedIn}
          isMain={isMain}
        />
      )}
    </main>
  );
};

export default SavedNews;
