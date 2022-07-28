import React, { useCallback } from 'react';

const FormUseWithValidation = (submitFunction) => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    event.persist();
    const target = event.target;
    const name = target.name;
    const value = target.value;

    validate(event, name, value);

    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());
  };

  const validate = (event, name, value) => {
    switch (name) {
      case 'name':
        if (value.length <= 4 && value.length > 0) {
          setErrors({
            ...errors,
            name: 'Invalid Username. must contain at least 5 letters',
          });
        } else {
          const errorsWithoutUsername = Object.keys(errors).reduce(
            (acc, key) => {
              if (key !== 'name') {
                acc[key] = errors[key];
              }
              return acc;
            },
            {}
          );

          setErrors(errorsWithoutUsername);
        }
        break;

      case 'email':
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value) &&
          value.length > 0
        ) {
          setErrors({
            ...errors,
            email: 'Invalid email address',
          });
        } else {
          const errorsWithoutUsername = Object.keys(errors).reduce(
            (acc, key) => {
              if (key !== 'email') {
                acc[key] = errors[key];
              }
              return acc;
            },
            {}
          );

          setErrors(errorsWithoutUsername);
        }

        break;

      case 'password':
        if (value.length <= 7 && value.length > 0) {
          setErrors({
            ...errors,
            password: 'Password should contain a minimum of 8 characters',
          });
        } else {
          const errorsWithoutUsername = Object.keys(errors).reduce(
            (acc, key) => {
              if (key !== 'password') {
                acc[key] = errors[key];
              }
              return acc;
            },
            {}
          );

          setErrors(errorsWithoutUsername);
        }

        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    submitFunction({ values });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, handleSubmit };
};

export default FormUseWithValidation;

//Login

// const [inputs, setInput] = useState({
//   email: '',
//   password: '',
// });

// const handleSubmit = (e) => {
//   e.preventDefault();
//   onSubmit({ values });
// };

// const handleChange = (e) => {
//   const value = e.target.value;
//   setInput({
//     ...inputs,
//     [e.target.name]: value,
//   });
// };

// const errorText = null;
