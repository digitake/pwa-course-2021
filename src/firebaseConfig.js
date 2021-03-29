import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCJV1pv83Mxh6JnOPQjYRP-VNWO6oGwWZY",
    authDomain: "tangtee-chat.firebaseapp.com",
    databaseURL: "https://tangtee-chat-default-rtdb.firebaseio.com",
    projectId: "tangtee-chat",
    storageBucket: "tangtee-chat.appspot.com",
    messagingSenderId: "942465141766",
    appId: "1:942465141766:web:241facf1c40ca828fcc787"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;