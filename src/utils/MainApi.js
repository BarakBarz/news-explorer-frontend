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

  getArticleCollection(token) {
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

  setUserInfo(name, about, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => this._getResponseData(res));
  }

  addLike = (cardId, token) => {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  };

  removeUserCard = (cardId, token) => {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
    }).then((res) => this._getResponseData(res));
  };

  changeLikeCardStatus(cardId, isNotLiked, token) {
    if (isNotLiked) {
      return this.addLike(cardId, token);
    } else {
      return this.removeLike(cardId, token);
    }
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error('something Wrong'));
    }
    return res.json();
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.barakfinalproject.students.nomoredomainssbs.ru',
});

export default mainApi;

