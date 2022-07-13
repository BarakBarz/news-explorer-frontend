import React from 'react';
import './Card.css';
import cardButtonInactive from '../../images/save-inactive.svg';

function Card({ card }) {
  return (
    <li className='article-card'>
      <div className='article-card__button-container'>
        <div className='article-card__button-status'>
          <p className='article-card__button-status-text'></p>
        </div>
        <button src={cardButtonInactive} className='article-card__save-btn' />
      </div>
      <img className='article-card__img' src={card.image} alt='article' />

      <div className='article-card__info'>
        <p className='article-card__date'>{card.date}</p>
        <h3 className='article-card__title'>{card.title}</h3>
        <blockquote cite={card.source} className='article-card__text-content'>
          {card.text}
        </blockquote>
        <a href={card.link} className='article-card__source'>
          {card.source}
        </a>
      </div>
    </li>
  );
}

export default Card;
