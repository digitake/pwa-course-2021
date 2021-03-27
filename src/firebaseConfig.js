import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJJ_SSuYxQuoWxqYbsvsZs9DXM_vbzuY0",
    authDomain: "mango-talks-app-c.firebaseapp.com",
    projectId: "mango-talks-app-c",
    storageBucket: "mango-talks-app-c.appspot.com",
    messagingSenderId: "268760032759",
    appId: "1:268760032759:web:ea78c76407e218e904faf2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;