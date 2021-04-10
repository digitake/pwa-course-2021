import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD7avp0kLGnfYn0Xp8n22CRXSKhxBvzkCo",
    authDomain: "my-chatapp-anichat.firebaseapp.com",
    projectId: "my-chatapp-anichat",
    storageBucket: "my-chatapp-anichat.appspot.com",
    messagingSenderId: "554402727355",
    appId: "1:554402727355:web:ae16a643000cb85c39b09e"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;