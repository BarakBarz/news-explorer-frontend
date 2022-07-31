import React from 'react';
import './CardButtonDelete.css';

const CardButtonDelete = ({ deleteButtonClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    deleteButtonClick(e);
  };

  return (
    <>
      <button
        onClick={(e) => handleClick(e)}
        className='button button_type_delete'
      />

      <div className='button__status'>
        <p className='button__status-text'>Remove from saved</p>
      </div>
    </>
  );
};

export default CardButtonDelete;
