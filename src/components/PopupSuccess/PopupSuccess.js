import React from 'react';
import './PopupSuccess.css';

export default function PopupSuccess({
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  switchPopups,
}) {
  const handleOrClick = () => {
    switchPopups();
  };

  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen ? 'popup_visible' : ''
      }`}>
      <div className={`popup__box popup__box_type_${name}`}>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close'
          className='popup__close-btn'></button>
        <h3
          className={`popup__title popup__title_type_${name}`}>
          {title}
        </h3>
        <p className='popup__link' onClick={handleOrClick}>
          {buttonText}
        </p>
      </div>
    </div>
  );
}

