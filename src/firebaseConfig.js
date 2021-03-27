import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHu5DCConwE3jvfGxwu-J0yN22ptzdHjY",
    authDomain: "chatapp-benzchk.firebaseapp.com",
    databaseURL: "https://chatapp-benzchk-default-rtdb.firebaseio.com",
    projectId: "chatapp-benzchk",
    storageBucket: "chatapp-benzchk.appspot.com",
    messagingSenderId: "601303782639",
    appId: "1:601303782639:web:f0a5a0edaf4910cf23f71a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;