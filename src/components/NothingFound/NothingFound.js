import React from 'react';
import './NothingFound.css';
import notFound from '../../images/not-found.svg';

function NothingFound() {
  return (
    <section className='not-found'>
      <img src={notFound} alt='not found error' className='not-found__image' />
      <h3 className='not-found__title'>Nothing found</h3>
      <p className='not-found__info'>
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
