import React, { useCallback } from 'react';

const useFormWithValidation = (submitFunction) => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
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
    return fetch(
      submitFunction(values)
        .then((res) => {
          if (res.status === 409) {
            setErrors({
              ...errors,
              submitRegisterError: 'Something went wrong',
            });
            return;
          } else if (res.status === 500) {
            setErrors({
              ...errors,
              submitRegisterError:
                'Something went wrong with the server. please try again later',
            });
            setErrors({
              ...errors,
              submitLoginError:
                'Something went wrong with the server. please try again later',
            });
            return;
          } else if (res.ok === false) {
            setErrors({
              ...errors,
              submitLoginError: 'Email or password is incorrect',
            });
            return;
          }

          resetForm();
        })
        .catch((e) => console.log(e))
    );
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, handleSubmit };
};

export default useFormWithValidation;
