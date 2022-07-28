import React from 'react';
import Popup from '../Popup/Popup';
import './PopupWithForm.css';

export default function PopupWithForm({
  children,
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  switchPopups,
  isValid,
}) {
  const orText = buttonText === 'Sign in' ? 'Sign Up' : 'Sign in';

  const handleOrClick = () => {
    switchPopups();
  };

  console.log(isValid);

  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name}>
      <h3 className={`popup__title popup__title_type_${name}`}>{title}</h3>
      <form className='popup__form' id={`${name}-form`} onSubmit={onSubmit}>
        {children}

        <button
          type='submit'
          aria-label='Submit'
          className={`popup__submit-btn`}
          disabled={!isValid}>
          {buttonText}
        </button>
        <p className='popup__text'>
          or{' '}
          <span className='popup__link' onClick={handleOrClick}>
            {orText}
          </span>
        </p>
      </form>
    </Popup>
  );
}

