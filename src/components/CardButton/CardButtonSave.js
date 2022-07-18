import React from 'react';
import './CardButton.css';

const CardButtonSave = ({
  isLoggedIn,
  isArticleSaved,
  saveButtonClick,
}) => {
  const handleClick = (e) => {
    saveButtonClick(e);
  };

  return (
    <>
      <button
        onClick={(e) => handleClick(e)}
        className={
          isLoggedIn && isArticleSaved
            ? 'button button_type_save button_type_save_active'
            : 'button button_type_save'
        }
      />
      {!isLoggedIn && (
        <div className='button__status'>
          <p className='button__status-text'>
            Sign in to save articles
          </p>
        </div>
      )}
    </>
  );
};

export default CardButtonSave;
