import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = () => {
  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>
        Saved articles
      </h2>
      <h3 className='saved-news-header__greeting'>
        Barak, you have 5 saved articles
      </h3>
      <p className='saved-news-header__keywords-used'>
        By keywords:{' '}
        <span className='saved-news-header__bold-keyword'>
          Nature, Yellowstone, and 2 other
        </span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
