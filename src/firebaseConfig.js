import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDz8uPDoLh6WIHYqTOmJuO8pNN7YtFspfY",
    authDomain: "chatapp-pwa-study.firebaseapp.com",
    databaseURL: "https://chatapp-pwa-study-default-rtdb.firebaseio.com",
    projectId: "chatapp-pwa-study",
    storageBucket: "chatapp-pwa-study.appspot.com",
    messagingSenderId: "870056633348",
    appId: "1:870056633348:web:27c46fdd8811fa11514151"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;