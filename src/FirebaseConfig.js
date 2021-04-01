import firebase from 'firebase';

 // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBj1LyIO5bA19_D6JzMu62sz9xn4HFSGmw",
    authDomain: "chatapp-pwa-course-1620703478.firebaseapp.com",
    databaseURL: "https://chatapp-pwa-course-1620703478-default-rtdb.firebaseio.com",
    projectId: "chatapp-pwa-course-1620703478",
    storageBucket: "chatapp-pwa-course-1620703478.appspot.com",
    messagingSenderId: "238558235711",
    appId: "1:238558235711:web:9da8cb5e3c045aef58fc8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;