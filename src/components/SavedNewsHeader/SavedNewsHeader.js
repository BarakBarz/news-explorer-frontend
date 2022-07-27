import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ savedArticles }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const keywordCounter = [];
  savedArticles.forEach((article) => {
    keywordCounter[article.keyword] =
      (keywordCounter[article.keyword] || 0) + 1;
  });

  const reducedKeywordsList = Object.keys(keywordCounter).sort(
    (a, b) => parseFloat(b) - parseFloat(a)
  );
  let keywords;
  if (reducedKeywordsList <= 3) {
    keywords = reducedKeywordsList.slice(0, 3);
  } else {
    keywords = reducedKeywordsList.slice(0, 2);
  }

  console.log(keywords);
  console.log({ reducedKeywordsList });

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <h3 className='saved-news-header__greeting'>
        {`${currentUser}, you have ${savedArticles.length} saved articles`}
      </h3>
      <p className='saved-news-header__keywords-used'>
        {`By ${savedArticles.length === 0 ? 'no keywords' : 'keywords:'}`}
        <span className='saved-news-header__bold-keyword'>
          {`${savedArticles.length === 0 ? '' : `{keywordsList}`}`}
        </span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
