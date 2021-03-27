import  firebase  from 'firebase';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBuwYX0bhV0ibcqI9qtEz8ww1Bkd1mPfLU",
    authDomain: "chatapp-pwa-2611.firebaseapp.com",
    databaseURL: "https://chatapp-pwa-2611-default-rtdb.firebaseio.com",
    projectId: "chatapp-pwa-2611",
    storageBucket: "chatapp-pwa-2611.appspot.com",
    messagingSenderId: "579038239759",
    appId: "1:579038239759:web:1d54176ac30196be08d77a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;