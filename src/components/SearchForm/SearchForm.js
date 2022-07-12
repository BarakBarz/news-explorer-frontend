import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        className='form__input'></input>
      <button className='form__button'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
