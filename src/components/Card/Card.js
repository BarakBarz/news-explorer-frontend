import React, { useState } from 'react';
import './Card.css';
import cardButtonInactive from '../../images/save-inactive.svg';

const Card = React.memo(({ card, id, isLoggedIn }) => {
  const [isArticleSaved, setIsArticleSaved] = useState(false);

  const handleClick = () => {
    setIsArticleSaved(!isArticleSaved);
  };

  return (
    <li className='article-card'>
      <div className='article-card__button-container'>
        <button
          src={cardButtonInactive}
          onClick={handleClick}
          className={
            isLoggedIn && isArticleSaved
              ? 'article-card__save-btn article-card__save-btn_active'
              : 'article-card__save-btn'
          }
        />
        {!isLoggedIn && (
          <div className='article-card__button-status'>
            <p className='article-card__button-status-text'>
              Sign in to save articles
            </p>
          </div>
        )}
      </div>
      <img className='article-card__img' src={card.image} alt='article' />

      <div className='article-card__info'>
        <p className='article-card__date'>{card.date}</p>
        <h3 className='article-card__title'>{id + card.title}</h3>
        <blockquote cite={card.source} className='article-card__text-content'>
          {card.text}
        </blockquote>
        <a href={card.link} className='article-card__source'>
          {card.source}
        </a>
      </div>
    </li>
  );
});

export default Card;
