import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8wTnh1bi83G6Atv7yH6ig_I4U1BrPuRU",
    authDomain: "my-chattapp-pwa.firebaseapp.com",
    projectId: "my-chattapp-pwa",
    storageBucket: "my-chattapp-pwa.appspot.com",
    messagingSenderId: "473171944708",
    appId: "1:473171944708:web:6d7400ff5f7fde881b1c51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;