import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCi3LV93MV-yZMGJ2WFOOwuIt55jZP17us",
    authDomain: "chatapp-drawzy.firebaseapp.com",
    databaseURL: "https://chatapp-drawzy-default-rtdb.firebaseio.com",
    projectId: "chatapp-drawzy",
    storageBucket: "chatapp-drawzy.appspot.com",
    messagingSenderId: "487970962056",
    appId: "1:487970962056:web:fe0d2c3e36fb33db037d3d",
    measurementId: "G-JQLZ33MLZV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;