import React from 'react';
import ReactDOM from 'react-dom';
import { CeibaApp } from './CeibaApp';
import './styles/index.scss';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = 'https://reqres.in';

ReactDOM.render(
  <React.StrictMode>
    <CeibaApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
