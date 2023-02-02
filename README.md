# News-Explorer Web App

This app let's unauthorized users search their news through an almost infinite
amount of sources.

Registered users can save and delete the their favorite articles onto a seperate
section that remembers the keyword searched to find the particular article.

In the saved news section, a user can see how many articles saved, and wich are
the most popular ones, based on the order of keywords, above the articles
section.

## MERN Stack

- BackEnd: MongoDB, NodeJS, and Express library.

- Front-End: React, Vanilla JS, CSS.

- Host: Microsoft Azure - OS: UBUNTU 20.04

### Download

Run this on a folder you want the app's files at.

```bash
git clone https://github.com/BarakB1991/news-explorer-frontend.git
git clone https://github.com/BarakB1991/news-explorer-api.git
```

To run the app locally run this code in both of the repos:

```bash
npm i

npm start
```

Make sure to change the frontend app's url's which are in the auth.js, and
mainApi.js in the utils folder to 'localhost:3000' or the port of your choice.

```javascript
// example auth.js

//from:
<<<<<<< HEAD
const BASE_URL = 'https://api.news-explorer-bb.students.nomoredomainssbs.ru';
=======
const BASE_URL = 'https://news-explorer-frontend-barakb1991.vercel.app/api/v1';
>>>>>>> stage-3
// to:
const BASE_URL = 'localhost:3000';
```

### Functionality

- [NewsApi](https://newsapi.org/) is used as a third party API.
- HOC used to protect and redirect unauthorized users.
- Created backend API to handle auth requests and saved articles.

### Roadmap

- In the future, articles will have a sorting interface that the user can decide
  on, based on age of article, source, keyword, etc.

---

<<<<<<< HEAD
[The full fledged website](https://news-explorer-bb.students.nomoredomainssbs.ru)
=======
[The full fledged website](https://news-explorer-frontend-barakb1991.vercel.app/)
>>>>>>> stage-3

[The backend code](https://github.com/BarakB1991/news-explorer-api.git)

