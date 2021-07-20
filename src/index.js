/*eslint no-extend-native: ["error", { "exceptions": ["Number"] }]*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

Number.prototype.addZero = function () {
  return this.toString().padStart(2, 0);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
