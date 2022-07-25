import React, { useState } from 'react';
import CardButtonSave from '../CardButton/CardButtonSave';
import CardButtonDelete from '../CardButton/CardButtonDelete';
import './NewsCard.css';

const NewsCard = ({ isLoggedIn, article, isMain }) => {
  const [isArticleSaved, setIsArticleSaved] =
    useState(false);

  console.log(article);
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
        src={article.urlToImage}
        alt='article'
      />

      <div className='article-card__info'>
        <p className='article-card__date'>
          {article.publishedAt}
        </p>
        <h3 className='article-card__title'>
          {article.title}
        </h3>
        <blockquote
          cite={article.source.id}
          className='article-card__text-content'>
          {article.description}
        </blockquote>
        <a
          href={article.url}
          className='article-card__source'>
          {article.source.name}
        </a>
      </div>
    </li>
  );
};

export default React.memo(NewsCard);
