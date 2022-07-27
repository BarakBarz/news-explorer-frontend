import React, { useEffect, useState } from 'react';
import CardButtonSave from '../CardButton/CardButtonSave';
import CardButtonDelete from '../CardButton/CardButtonDelete';
import './NewsCard.css';

const NewsCard = ({
  isLoggedIn,
  isMain,
  onCardButtonClick,
  article,
  savedArticles,
}) => {
  const formatDateFromResult = (publishDate) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date(publishDate);
    let year = date.getFullYear();
    let month = date.getUTCMonth();
    let dt = date.getDate();

    return `${months[month]} ${dt}, ${year}`;
  };

  const buttonClick = (e) => {
    e.stopPropagation();
    onCardButtonClick(isSaved, { title, text, source, link, date, image, _id });
  };

  let title = article.title;
  let text = article.description || article.text;
  let source = article.source.name || article.source;
  let link = article.url || article.link;
  let date = article.publishedAt || article.date;
  let image = article.urlToImage || article.image;
  let keyword = undefined || article.keyword;
  let _id = undefined || article._id;

  const keywordElement = !isMain && (
    <div className='article-card__keyword-container'>
      <p className='article-card__keyword-text'>{keyword}</p>
    </div>
  );

  function checkIsArticleSaved(savedArticle) {
    if (savedArticle.link === article.url) {
      _id = savedArticle._id;
      return _id;
    }
  }

  const isSaved = isMain
    ? savedArticles.some((savedArticle) => checkIsArticleSaved(savedArticle))
    : true;

  return (
    <li
      className='article-card'
      onClick={(e) => {
        e.stopPropagation();
        window.open(link, '_blank');
      }}>
      <div className='article-card__button-container'>
        {isMain ? (
          <CardButtonSave
            saveButtonClick={buttonClick}
            isLoggedIn={isLoggedIn}
            isSaved={isSaved}
            isMain={isMain}
          />
        ) : (
          <CardButtonDelete deleteButtonClick={buttonClick} />
        )}
      </div>

      {keywordElement}

      <img className='article-card__img' src={image} alt='article' />

      <div className='article-card__info'>
        <p className='article-card__date'>{formatDateFromResult(date)}</p>
        <h3 className='article-card__title'>{title}</h3>
        <blockquote cite={source} className='article-card__text-content'>
          {text}
        </blockquote>
        <p className='article-card__source'>{source}</p>
      </div>
    </li>
  );
};

export default React.memo(NewsCard);
