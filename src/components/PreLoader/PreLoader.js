import React from 'react';
import './PreLoader.css';

function PreLoader() {
  return (
    <div className='preloader'>
      <div className='preloader__spinner'></div>
      <p className='preloader__text'>Searchin for news...</p>
    </div>
  );
}

export default PreLoader;
