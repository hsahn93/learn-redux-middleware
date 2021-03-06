import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './modules';
// import myLogger from './middleware/myLogger';
import logger from 'redux-logger'
const store = createStore(rootReducer, applyMiddleware(logger));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
