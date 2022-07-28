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
  errors,
}) {
  const orText = buttonText === 'Sign in' ? 'Sign Up' : 'Sign in';

  const handleOrClick = () => {
    switchPopups();
  };

  console.log(errors);

  return (
    <Popup isOpen={isOpen} onClose={onClose} name={name}>
      <h3 className={`popup__title popup__title_type_${name}`}>{title}</h3>
      <form className='popup__form' id={`${name}-form`} onSubmit={onSubmit}>
        {children}

        <span
          className={`popup__error popup__error_type_submit ${
            (errors.submitRegisterError || errors.submitLoginError) &&
            `popup__error_visible`
          }`}>
          {errors.submitRegisterError ||
            errors.submitLoginError ||
            (errors.submitLoginError && errors.submitRegisterError)}
        </span>
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

