import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA7gMx6ZWS62aQRBsIvVMnJ8CphOZ4QN-Y",
    authDomain: "chatapp-pwa-drawzy.firebaseapp.com",
    databaseURL: "https://chatapp-pwa-drawzy-default-rtdb.firebaseio.com",
    projectId: "chatapp-pwa-drawzy",
    storageBucket: "chatapp-pwa-drawzy.appspot.com",
    messagingSenderId: "387640111889",
    appId: "1:387640111889:web:4e595f75bbc03a5ca452b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;