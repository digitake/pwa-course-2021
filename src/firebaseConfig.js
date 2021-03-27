import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDAHIGmwprvz5xVwiv5ozk15SpBXrQ1sR4",
    authDomain: "my-project-pwa-gi472.firebaseapp.com",
    projectId: "my-project-pwa-gi472",
    storageBucket: "my-project-pwa-gi472.appspot.com",
    messagingSenderId: "300103587234",
    appId: "1:300103587234:web:5de2db23ebc1df998c0efb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;