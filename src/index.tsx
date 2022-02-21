import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { enhancer } from 'addon-redux'
import axios from 'axios';


//axios.defaults.baseURL = process.env.REACT_APP_API_URL;   // baseURL
axios.defaults.withCredentials = true;     //   cookie give & take with backend

if (process.env.NODE_ENV === 'development') {
  //const { worker } = require('./mocks/browser');
  //worker.start();
}  //   msw 라이브러리를 사용한 mock-server 구동
export const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
