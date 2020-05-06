import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <h1 className="tc">Welcome to my World </h1>
  <div>
    <Avatar id="1" name="Akshay" work="Web Developer"/>
    <Avatar id="2" name="Jhon" work="Developer" />
    <Avatar  id="3" name="Patra" work="Viewer" />
    <Avatar  id="4" name="Chauhan" work="Assistant" />
    <button > Click me </button>
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
