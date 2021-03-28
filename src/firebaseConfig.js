import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDfAR53Z_WXfdozY2V7cxNG_B_tJ4Xl5xQ",
    authDomain: "breakout-chatapp-pwa.firebaseapp.com",
    projectId: "breakout-chatapp-pwa",
    storageBucket: "breakout-chatapp-pwa.appspot.com",
    messagingSenderId: "890267306700",
    appId: "1:890267306700:web:028c4d35d88f50d3ca9069"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;