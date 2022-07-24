import React, { useState } from 'react';
import CardButtonSave from '../CardButton/CardButtonSave';
import CardButtonDelete from '../CardButton/CardButtonDelete';
import './NewsCard.css';

const NewsCard = ({ isLoggedIn, card, isMain }) => {
  const [isArticleSaved, setIsArticleSaved] =
    useState(false);

  const saveButtonClick = (e) => {
    e.stopPropagation();
    setIsArticleSaved(!isArticleSaved);
  };

  const deleteButtonClick = (e) => {
    e.stopPropagation();
    // api request
  };

  const keywordElement = !isMain && (
    <div className='article-card__keyword-container'>
      <p className='article-card__keyword-text'>Nature</p>
    </div>
  );
  return (
    <li className='article-card'>
      <div className='article-card__button-container'>
        {isMain ? (
          <CardButtonSave
            saveButtonClick={saveButtonClick}
            isArticleSaved={isArticleSaved}
            isLoggedIn={isLoggedIn}
            isMain={isMain}
          />
        ) : (
          <CardButtonDelete
            deleteButtonClick={deleteButtonClick}
          />
        )}
      </div>

      {keywordElement}

      <img
        className='article-card__img'
        src={card.image}
        alt='article'
      />

      <div className='article-card__info'>
        <p className='article-card__date'>{card.date}</p>
        <h3 className='article-card__title'>
          {card.title}
        </h3>
        <blockquote
          cite={card.source}
          className='article-card__text-content'>
          {card.text}
        </blockquote>
        <a
          href={card.link}
          className='article-card__source'>
          {card.source}
        </a>
      </div>
    </li>
  );
};

export default React.memo(NewsCard);
