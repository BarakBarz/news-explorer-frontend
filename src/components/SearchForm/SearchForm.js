import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearchClick }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchClick(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        placeholder='Enter topic'
        value={'' || search}
        className='form__input'></input>
      <button className='form__button'>Search</button>
    </form>
  );
}

export default SearchForm;
