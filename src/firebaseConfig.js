import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAsUA7Sx6wkjvIcCESJxmbHOKTGNE2Cuo",
    authDomain: "my-chatapp-for-fayilyofear.firebaseapp.com",
    projectId: "my-chatapp-for-fayilyofear",
    storageBucket: "my-chatapp-for-fayilyofear.appspot.com",
    messagingSenderId: "38070623184",
    appId: "1:38070623184:web:70884ea443065daf0d77d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;