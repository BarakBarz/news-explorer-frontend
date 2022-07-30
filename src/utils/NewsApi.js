import React from 'react';

class NewsApi extends React.Component {
  constructor(props) {
    super(props);
    this._url = props.baseUrl;
    this._apiKey = 'fd7fae9dfd3c428a88dc3107804dc426';
  }

  _fromTo = () => {
    const date = new Date();
    const now = date.toISOString().slice(0, 10);

    date.setDate(date.getDate() - 7);
    const sevenDaysAgo = date.toISOString().slice(0, 10);

    return `from=${sevenDaysAgo}&to=${now}`;
  };

  getNewsArticles(keyword) {
    return fetch(
      `${this._url}/?q=${keyword}&${this._fromTo()}&pageSize=100&apiKey=${
        this._apiKey
      }`
    ).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error('something Wrong'));
    }
    return res.json();
  }
}

const newsApi = new NewsApi({
  baseUrl: 'https://nomoreparties.co/news/v2/everything',
});

export default newsApi;

