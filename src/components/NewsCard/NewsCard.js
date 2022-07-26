import React, { useState } from 'react';
import CardButtonSave from '../CardButton/CardButtonSave';
import CardButtonDelete from '../CardButton/CardButtonDelete';
import './NewsCard.css';

const NewsCard = ({ isLoggedIn, isMain, onSaveClick, article }) => {
  const [isArticleSaved, setIsArticleSaved] = useState(false);

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

  const saveButtonClick = (e) => {
    e.stopPropagation();
    onSaveClick(article);
    setIsArticleSaved(!isArticleSaved);
  };

  const deleteButtonClick = (e) => {
    e.stopPropagation();
    // api request
  };

  let title;
  let text;
  let link;
  let source;
  let date;
  let image;
  let keyword;
  let _id;

  if (isMain) {
    title = article.title;
    text = article.description;
    source = article.source;
    link = article.url;
    date = article.publishedAt;
    image = article.urlToImage;

    console.table(title, text, link, source, date, image);

    return title, text, source, link, date, image;
  } else {
    const { keyword, title, text, link, source, date, image, _id } = article;
  }

  console.table(keyword, title, text, link, source, date, image, _id);

  const keywordElement = !isMain && (
    <div className='article-card__keyword-container'>
      <p className='article-card__keyword-text'>{keyword}</p>
    </div>
  );

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
            saveButtonClick={saveButtonClick}
            isArticleSaved={isArticleSaved}
            isLoggedIn={isLoggedIn}
            isMain={isMain}
          />
        ) : (
          <CardButtonDelete deleteButtonClick={deleteButtonClick} />
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
