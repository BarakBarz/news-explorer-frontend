import React, { useState } from 'react';
import useFormWithValidation from '../../hooks/useFormWithValidation/useFormWithValidation';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import './Register.css';

const Register = ({ isOpen, onClose, switchPopups, onSubmit }) => {
  const { handleChange, errors, isValid, values, handleSubmit } =
    useFormWithValidation(onSubmit);

  const [readOnly, setReadOnly] = useState(true);

  return (
    <PopupWithForm
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      buttonText='Sign up'
      title='Sign up'
      name='register'
      isOpen={isOpen}
      switchPopups={switchPopups}
      errors={errors}>
      <label className='popup__input-label'>Email</label>
      <input
        className='popup__input'
        placeholder='Enter email'
        type='email'
        name='email'
        value={values.email || ''}
        readOnly={readOnly}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        onChange={handleChange}
        required
      />
      <span
        className={`popup__error ${
          errors.email ? `popup__error_visible` : ''
        }`}>
        {errors.email}
      </span>
      <label className='popup__input-label'>Password</label>
      <input
        className='popup__input'
        placeholder='Enter password'
        type='password'
        name='password'
        readOnly={readOnly}
        value={values.password || ''}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        maxLength='30'
        minLength='8'
        onChange={handleChange}
        required
      />
      <span
        className={`popup__error ${errors.password && `popup__error_visible`}`}>
        {errors.password}
      </span>
      <label className='popup__input-label'>Username</label>
      <input
        className='popup__input'
        placeholder='Enter your username'
        name='name'
        type='text'
        readOnly={readOnly}
        value={values.name || ''}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        onChange={handleChange}
        minLength='5'
        required
      />
      <span className={`popup__error ${errors.name && `popup__error_visible`}`}>
        {errors.name}
      </span>
    </PopupWithForm>
  );
};

export default Register;
