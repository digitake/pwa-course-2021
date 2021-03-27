import  firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLirnobt_7UBWtuPkB8UII4cN-77KvCpg",
    authDomain: "bu-chatapp-pwa-chatclub.firebaseapp.com",
    databaseURL: "https://bu-chatapp-pwa-chatclub-default-rtdb.firebaseio.com",
    projectId: "bu-chatapp-pwa-chatclub",
    storageBucket: "bu-chatapp-pwa-chatclub.appspot.com",
    messagingSenderId: "706022678488",
    appId: "1:706022678488:web:59a5ede4a64792a2459cad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
