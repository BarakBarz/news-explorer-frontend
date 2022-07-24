import React, { useState } from 'react';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import './Login.css';

const Login = ({
  onClose,
  isOpen,
  switchPopups,
  onSubmit,
}) => {
  const [inputs, setInput] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      ...inputs,
      [e.target.name]: value,
    });
  };

  const errorText = null;

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText='Sign in'
      title='Sign in'
      name='login'
      isOpen={isOpen}
      switchPopups={switchPopups}>
      <label className='popup__input-label'>Email</label>

      <input
        className='popup__input popup__input_type_login'
        placeholder='Enter email'
        name='email'
        value={'' || inputs.email}
        maxLength='30'
        type='email'
        onChange={handleChange}
        required
      />

      <span
        id='validation-error'
        className='popup__error popup__error_visible popup__error_type_login'>
        Invalid email address
      </span>

      <label className='popup__input-label'>Password</label>

      <input
        className='popup__input popup__input_type_login'
        placeholder='Enter password'
        name='password'
        value={'' || inputs.password}
        maxLength='30'
        minLength='8'
        type='password'
        onChange={handleChange}
        required
      />

      <span
        id='validation-error'
        className='popup__error popup__error_type_login'>
        {'' || errorText}
      </span>
    </PopupWithForm>
  );
};

export default Login;
