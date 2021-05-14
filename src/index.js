import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register("sw.js")
  .then(function(registration){
    console.log('Registration successful, scope is:', registration.scope)
  })
  .catch(function(error){
    console.log('Service worker registration failed, error: ', error)
  })
}