import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADD6T-bV51Ul6peY_gLYCMma_5gbQrxow",
    authDomain: "my-chatapp-for-mbpwa.firebaseapp.com",
    projectId: "my-chatapp-for-mbpwa",
    storageBucket: "my-chatapp-for-mbpwa.appspot.com",
    messagingSenderId: "994381621958",
    appId: "1:994381621958:web:1fce067163b3d6d18ec5c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;