import React, { useState } from 'react';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import './Register.css';

const Register = ({ isOpen, onClose, switchPopups }) => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit reg');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
    console.log('change reg input');
  };

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText='Sign up'
      title='Sign up'
      name='register'
      isOpen={isOpen}
      switchPopups={switchPopups}>
      <label className='popup__input-label'>Email</label>
      <input
        className='popup__input'
        placeholder='Enter email'
        name='email'
        value={'' || input.email}
        maxLength='30'
        type='text'
        onChange={handleChange}
        required
      />
      <label className='popup__input-label'>Password</label>
      <input
        className='popup__input'
        placeholder='Enter password'
        name='password'
        value={'' || input.password}
        maxLength='30'
        minLength='8'
        type='text'
        onChange={handleChange}
        required
      />
      <label className='popup__input-label'>Username</label>{' '}
      <input
        className='popup__input popup__input_type_signup'
        placeholder='Enter your username'
        name='username'
        value={'' || input.username}
        maxLength='30'
        minLength='6'
        type='text'
        onChange={handleChange}
        required></input>{' '}
      <span
        id='validation-error'
        className='popup__error popup__error_visible popup__error_type_signup'>
        This email is not available
      </span>
    </PopupWithForm>
  );
};

export default Register;
