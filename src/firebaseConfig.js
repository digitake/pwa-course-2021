import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDRg25cftUQp_kQLH1G0Yt7hsKKSQqEGwU",
    authDomain: "my-chat-app-23550.firebaseapp.com",
    projectId: "my-chat-app-23550",
    storageBucket: "my-chat-app-23550.appspot.com",
    messagingSenderId: "850490834801",
    appId: "1:850490834801:web:98c67e1b1557bff324c0d0",
    measurementId: "G-85965Q2TBS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;