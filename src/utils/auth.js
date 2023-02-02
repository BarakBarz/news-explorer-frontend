const BASE_URL = 'https://news-explorer-frontend-barakb1991.vercel.app/api/v1';

const isResOk = (res) => (res.ok ? res.json() : Promise.reject(res));

export const register = (values) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then(isResOk);
};

export const authorize = (values) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }).then(isResOk);
};

export const checkToken = (token) => {
  if (!token) {
    throw new Error('Invalid Token');
  }

  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then(isResOk);
};

