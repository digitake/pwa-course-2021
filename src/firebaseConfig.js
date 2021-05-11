import firebase from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAHi_UOpCJuml_u0WR39R2svjUOvFTymuQ",
  authDomain: "chatapp-b5a54.firebaseapp.com",
  databaseURL: "https://nottae12-pwa-default-rtdb.firebaseio.com/",
  projectId: "chatapp-b5a54",
  storageBucket: "chatapp-b5a54.appspot.com",
  messagingSenderId: "782307115129",
  appId: "1:782307115129:web:1662846640741e75e614a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export default firebase;