import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './SearchBox.css';

function SearchBox() {
  return (
    <section className='search'>
      <div className='search__container'>
        <h2 className='search__title'>
          What's going on in the world?
        </h2>
        <p className='search__paragraph'>
          Find the latest news on any topic and
          save them in your personal account.
        </p>
        <SearchForm></SearchForm>
      </div>
    </section>
  );
}

export default SearchBox;
