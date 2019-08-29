import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let model = { clicks: 0};

ReactDOM.render(
  <App clicks={model.clicks}/>,
  document.getElementById('root')
);
