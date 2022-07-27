import React from 'react';
import './CardButton.css';

const CardButtonSave = ({ isLoggedIn, saveButtonClick, isSaved }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    saveButtonClick(e);
  };

  return (
    <>
      <button
        onClick={
          isLoggedIn
            ? (e) => handleClick(e)
            : (e) => {
                e.stopPropagation();
              }
        }
        className={
          isLoggedIn && isSaved
            ? 'button button_type_save button_type_save_active'
            : 'button button_type_save'
        }
      />
      {!isLoggedIn && (
        <div className='button__status'>
          <p className='button__status-text'>Sign in to save articles</p>
        </div>
      )}
    </>
  );
};

export default CardButtonSave;
