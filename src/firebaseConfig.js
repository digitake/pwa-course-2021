import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDM5ik0xtNOcqeZ4PfvqpT4c2AhuYzw8oI",
    authDomain: "tokey-chatapp-for-pwa.firebaseapp.com",
    projectId: "tokey-chatapp-for-pwa",
    storageBucket: "tokey-chatapp-for-pwa.appspot.com",
    messagingSenderId: "133878514832",
    appId: "1:133878514832:web:58bd13ffa971ac1cf5c415"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;