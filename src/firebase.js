import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhOcb1rqgyr6_D2jsIC6_OZJQhEWVoZZY",
    authDomain: "neptune-chat-26477.firebaseapp.com",
    databaseURL: "https://neptune-chat-26477-default-rtdb.firebaseio.com/",
    projectId: "neptune-chat-26477",
    storageBucket: "neptune-chat-26477.appspot.com",
    messagingSenderId: "416256951683",
    appId: "1:416256951683:web:2b696b997fab81c3b362b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;