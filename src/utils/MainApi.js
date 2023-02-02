import React from 'react';

class MainApi extends React.Component {
  constructor(props) {
    super(props);
    this._url = props.baseUrl;
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => this._getResponseData(res));
  }

  getUserArticleCollection(token) {
    return fetch(`${this._url}/articles`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res) => this._getResponseData(res));
  }

  saveArticle(article, token) {
    return fetch(`${this._url}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(article),
    }).then((res) => this._getResponseData(res));
  }

  removeSavedArticle = (articleId, token) => {
    return fetch(`${this._url}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  };

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error('something Wrong'));
    }
    return res.json();
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://news-explorer-frontend-barakb1991.vercel.app/api/v1',
});

export default mainApi;

