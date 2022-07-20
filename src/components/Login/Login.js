import React from 'react';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit login');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
    console.log('change login input');
  };

  return (
    <PopupWithForm
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText='Sign in'
      title='Sign in'
      name='login'
      isOpen={isOpen}>
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

      <span id='validation-error' className='popup__error'>
        This email is not available
      </span>

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

      <span
        id='validation-error'
        className='popup__error popup__error_type_login'></span>
    </PopupWithForm>
  );
};

export default Login;
