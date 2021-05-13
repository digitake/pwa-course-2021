import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDo4OXwOfZ0r2WVS6pJRiq0oY1bNSmgh5w",
    authDomain: "chatapp-pwa-course-2021.firebaseapp.com",
    databaseURL: "https://chatapp-pwa-course-2021-default-rtdb.firebaseio.com",
    projectId: "chatapp-pwa-course-2021",
    storageBucket: "chatapp-pwa-course-2021.appspot.com",
    messagingSenderId: "777945331431",
    appId: "1:777945331431:web:660923e0511cc2a9285442"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;