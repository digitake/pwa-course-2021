import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAvF2C7BvAIjO3s5KHuUhSxlrQHfrbSUnY",
    authDomain: "chat-app-990.firebaseapp.com",
    projectId: "chat-app-990",
    storageBucket: "chat-app-990.appspot.com",
    messagingSenderId: "898458776082",
    appId: "1:898458776082:web:6e39ac7c25574b6f8e9ecb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;