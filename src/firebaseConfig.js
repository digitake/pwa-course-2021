import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCDiEP6gaHu0qNsKsoQPaJJh0DErX_Sfng",
    authDomain: "tee-chatapp.firebaseapp.com",
    projectId: "tee-chatapp",
    storageBucket: "tee-chatapp.appspot.com",
    messagingSenderId: "941524850708",
    appId: "1:941524850708:web:7053f55835245dae65ef01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;