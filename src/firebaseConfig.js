import firebase from 'firebase';    

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoFXf3PaVujJLHN1sU8Hu0CCTle-Qmcyg",
    authDomain: "tang-tee.firebaseapp.com",
    databaseURL: "https://tang-tee-default-rtdb.firebaseio.com",
    projectId: "tang-tee",
    storageBucket: "tang-tee.appspot.com",
    messagingSenderId: "277632123836",
    appId: "1:277632123836:web:fdf322ba3fe617871161b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;