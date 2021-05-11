import firebase from 'firebase';

 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCLirnobt_7UBWtuPkB8UII4cN-77KvCpg",
  authDomain: "bu-chatapp-pwa-chatclub.firebaseapp.com",
  databaseURL: "https://nottae12-pwa-default-rtdb.firebaseio.com/",
  projectId: "bu-chatapp-pwa-chatclub",
  storageBucket: "bu-chatapp-pwa-chatclub.appspot.com",
  messagingSenderId: "706022678488",
  appId: "1:706022678488:web:e174e7aad4e1f2bf459cad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;