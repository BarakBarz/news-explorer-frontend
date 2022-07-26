import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ collection }) => {
  const keywordCounter = (collection) => {
    // take collection and sort keywordsby popularity
    // if keywords.length is 3 or smaller, display all keywords
    // if keywords.length is larger than 3, display first 2 and # of remaining keywords.
  };

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <h3 className='saved-news-header__greeting'>
        {`Barak, you have ${collection.length} saved articles`}
      </h3>
      <p className='saved-news-header__keywords-used'>
        {`By ${collection.length === 0 ? 'no keywords' : 'keywords:'}`}
        <span className='saved-news-header__bold-keyword'>
          {`${collection.length === 0 ? '' : 'keywords'}`}
        </span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
