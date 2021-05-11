import firebase from 'firebase';

var FirebaseConfig = {
  apiKey: "AIzaSyCbjQzVy0U48HO4hSujzoRct8HsExIEXdI",
  authDomain: "nottae12-pwa.firebaseapp.com",
  databaseURL: "https://nottae12-pwa-default-rtdb.firebaseio.com",
  projectId: "nottae12-pwa",
  storageBucket: "nottae12-pwa.appspot.com",
  messagingSenderId: "1091765849068",
  appId: "1:1091765849068:web:f0f9db3a27623d0dffcec9"
};

firebase.initializeApp(FirebaseConfig);


  export default firebase;