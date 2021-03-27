import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCNSKbx5dbGZu3tGSzUDTzVdjCGr8DknFs",
    authDomain: "my-app-mango-talk-pwa-f5254.firebaseapp.com",
    projectId: "my-app-mango-talk-pwa-f5254",
    storageBucket: "my-app-mango-talk-pwa-f5254.appspot.com",
    messagingSenderId: "885776223201",
    appId: "1:885776223201:web:2cf8e0cbc04aa7d3ede0a0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;