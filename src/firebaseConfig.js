import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCY_BoxA0JbXdhLk4zad-Bt_7YOL5lXpp4",
    authDomain: "papappchat-pwa.firebaseapp.com",
    databaseURL: "https://papappchat-pwa-default-rtdb.firebaseio.com",
    projectId: "papappchat-pwa",
    storageBucket: "papappchat-pwa.appspot.com",
    messagingSenderId: "1097662044369",
    appId: "1:1097662044369:web:f80af458917c62705acdf0"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;