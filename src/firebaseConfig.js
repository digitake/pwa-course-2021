import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAjElZTrbt13qp08jQbGQzg9hQkZZc58hI",
    authDomain: "chat-chat-monster.firebaseapp.com",
    projectId: "chat-chat-monster",
    storageBucket: "chat-chat-monster.appspot.com",
    messagingSenderId: "631704547732",
    appId: "1:631704547732:web:ea19b2771a8f649a98df81"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
