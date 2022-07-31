import React from 'react';

const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider =
  CurrentUserContext.Provider;

export default CurrentUserContext;

