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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

<<<<<<< HEAD
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);

  }).catch(function(error){
    console.log('Service woeker registration failed, error', error);

  })
}
=======
if('serviceWorker' in navigator){
  
  navigator.serviceWorker.register('sw.js')
  .then(function(registration){

    console.log('Registation successfull, scope is:', registration.scope);

  }).catch(function(error){
    
    console.log('Service worker regustration failed, error', error);

  })

}
>>>>>>> 8b5db0b92e44a9750c0c0ffe7d02a1ca88efe0c8
