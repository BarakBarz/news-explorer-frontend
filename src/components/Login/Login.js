import React, { useState } from 'react';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import './Login.css';

const Login = ({ onClose, isOpen, switchPopups, onSubmit }) => {
  // return;
  // (
  // <PopupWithForm
  //   onClose={onClose}
  //   onSubmit={handleSubmit}
  //   buttonText='Sign in'
  //   title='Sign in'
  //   name='login'
  //   isOpen={isOpen}
  //   switchPopups={switchPopups}>
  //   <label className='popup__input-label'>Email</label>
  //   <input
  //     className='popup__input popup__input_type_login'
  //     placeholder='Enter email'
  //     name='email'
  //     value={'' || useFormWithValidation.values.email}
  //     maxLength='30'
  //     type='email'
  //     onChange={useFormWithValidation.handleChange}
  //     required
  //   />
  //   <span
  //     id='validation-error'
  //     className='popup__error popup__error_type_login'>
  //     {'' || useFormWithValidation.errors}
  //   </span>
  //   <label className='popup__input-label'>Password</label>
  //   <input
  //     className='popup__input popup__input_type_login'
  //     placeholder='Enter password'
  //     name='password'
  //     value={'' || values.password}
  //     maxLength='30'
  //     minLength='8'
  //     type='password'
  //     onChange={handleChange}
  //     required
  //   />
  //   <span
  //     id='validation-error'
  //     className='popup__error popup__error_type_login'>
  //     {'' || errors}
  //   </span>
  //   <span
  //     id='validation-error-from-server'
  //     className='popup__error popup__error_type_login'>
  //     {'' || useFormWithValidation.errors}
  //   </span>
  // </PopupWithForm>
  // );
};

export default Login;
