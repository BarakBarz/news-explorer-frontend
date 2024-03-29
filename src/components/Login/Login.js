import React from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import './Login.css';

const Login = ({ onClose, isOpen, switchPopups, onSubmit }) => {
  const { handleChange, errors, isValid, values, handleSubmit } =
    useFormWithValidation(onSubmit);

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText='Sign in'
      title='Sign in'
      name='login'
      isOpen={isOpen}
      isValid={isValid}
      switchPopups={switchPopups}
      errors={errors}>
      <label className='popup__input-label'>Email</label>

      <input
        className='popup__input popup__input_type_login'
        placeholder='Enter email'
        name='email'
        type='email'
        value={values.email || ''}
        onChange={handleChange}
        required
      />

      <span
        id='validation-error'
        className={`popup__error ${
          errors.email ? `popup__error_visible` : ''
        }`}>
        {errors.email}
      </span>
      <label className='popup__input-label'>Password</label>
      <input
        className='popup__input popup__input_type_login'
        placeholder='Enter password'
        name='password'
        maxLength='30'
        minLength='8'
        value={values.password || ''}
        type='password'
        onChange={handleChange}
        required
      />
      <span
        id='validation-error'
        className={`popup__error ${errors.password && `popup__error_visible`}`}>
        {errors.password}
      </span>
    </PopupWithForm>
  );
};

export default Login;
