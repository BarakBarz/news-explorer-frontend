import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  isLoggedIn,
  children,
  userToken,
  path,
  ...props
}) => {
  return (
    <Route {...props}>
      {isLoggedIn ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: path,
          }}
        />
      )}
    </Route>
  );
};

export default ProtectedRoute;

