import React, { useState } from 'react';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import './Login.css';

const Login = ({ onClose, isOpen, switchPopups }) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit login');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
    console.log('change login input');
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
        value={'' || input.email}
        maxLength='30'
        type='text'
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
        value={'' || input.password}
        maxLength='30'
        minLength='8'
        type='text'
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
