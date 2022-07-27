import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

const SavedNewsHeader = ({ savedArticles }) => {
  const currentUser = React.useContext(CurrentUserContext);

  const sortKeywordByPopularity = () => {
    const keywordCounter = [];
    savedArticles.forEach((article) => {
      keywordCounter[article.keyword] =
        (keywordCounter[article.keyword] || 0) + 1;
    });

    const sortedKeywordsFromHighTolow = Object.keys(keywordCounter).sort(
      (a, b) => parseFloat(b) - parseFloat(a)
    );

    let keywords;

    if (sortedKeywordsFromHighTolow <= 3) {
      keywords = sortedKeywordsFromHighTolow.slice(0, 3);
    } else {
      keywords = sortedKeywordsFromHighTolow.slice(0, 2);
      keywords.push(`and ${sortedKeywordsFromHighTolow.length - 2} more`);
    }
    keywords = keywords.map((key) => ' ' + key);

    return keywords;
  };

  return (
    <section className='saved-news-header'>
      <h2 className='saved-news-header__title'>Saved articles</h2>
      <h3 className='saved-news-header__greeting'>
        {`${currentUser}, you have ${savedArticles.length} saved articles`}
      </h3>
      <p className='saved-news-header__keywords-used'>
        {`By ${savedArticles.length === 0 ? 'no keywords' : 'keywords:'}`}
        <span className='saved-news-header__bold-keyword'>
          {`${savedArticles.length === 0 ? '' : sortKeywordByPopularity()}`}
        </span>
      </p>
    </section>
  );
};

export default SavedNewsHeader;
