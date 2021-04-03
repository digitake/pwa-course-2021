import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3r6dziJyFi7Cr8bDIHc4AzOVTHLSmpgA",
    authDomain: "chat-app-test001.firebaseapp.com",
    projectId: "chat-app-test001",
    storageBucket: "chat-app-test001.appspot.com",
    messagingSenderId: "269837444857",
    appId: "1:269837444857:web:8e50d76a7217a955cd6428"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;