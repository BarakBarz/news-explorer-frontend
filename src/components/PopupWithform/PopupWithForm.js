import React from 'react';
import './PopupWithForm.css';

export default function PopupWithForm({
  children,
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
}) {
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
          {'Sign in'}
        </h3>
        <form
          className='popup__form'
          id={`${name}-form`}
          onSubmit={onSubmit}>
          {children}

          <button
            type='submit'
            aria-label='Submit'
            className={`popup__submit-btn`}>
            {buttonText}
            {'Sign in'}
          </button>
          <p className='popup__text'>
            or{' '}
            <a
              className='popup__link'
              onClick={() => {
                console.log('switcheroo');
              }}>
              {/* {orText} */}
              {'Sign up'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

