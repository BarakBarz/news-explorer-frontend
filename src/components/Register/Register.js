import React, { useState } from 'react';
import PopupWithForm from '../PopupWithform/PopupWithForm';

import './Register.css';

const Register = ({
  isOpen,
  onClose,
  switchPopups,
  onSubmit,
}) => {
  const [inputs, setInput] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [readOnly, setReadOnly] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ inputs });
    setInput({
      ...inputs,
      email: '',
      password: '',
      name: '',
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      ...inputs,
      [e.target.name]: value,
    });
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
        type='email'
        name='email'
        readOnly={readOnly}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        value={'' || inputs.email}
        maxLength='30'
        onChange={handleChange}
        required
      />
      <label className='popup__input-label'>Password</label>
      <input
        className='popup__input'
        placeholder='Enter password'
        type='password'
        name='password'
        readOnly={readOnly}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        value={'' || inputs.password}
        maxLength='30'
        minLength='8'
        onChange={handleChange}
        required
      />
      <label className='popup__input-label'>Username</label>
      <input
        className='popup__input popup__input_type_signup'
        placeholder='Enter your username'
        name='name'
        readOnly={readOnly}
        onFocus={() => setReadOnly(false)}
        onBlur={() => setReadOnly(true)}
        value={'' || inputs.name}
        maxLength='30'
        minLength='2'
        onChange={handleChange}
        required></input>
      <span
        id='validation-error'
        className='popup__error popup__error_visible popup__error_type_signup'>
        This email is not available
      </span>
    </PopupWithForm>
  );
};

export default Register;
