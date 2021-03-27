import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaSBhEcLUHbv8ttW8jNXtrA-KzP3_53Sk",
    authDomain: "anim-chat.firebaseapp.com",
    databaseURL: "https://anim-chat-default-rtdb.firebaseio.com",
    projectId: "anim-chat",
    storageBucket: "anim-chat.appspot.com",
    messagingSenderId: "747966949781",
    appId: "1:747966949781:web:fa0a768b06a2c8fdc72e9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;