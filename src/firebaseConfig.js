import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDvd2iRG7FAIbgMVdAXE1xlZfVIpmbA7Y0",
    authDomain: "my-chatapp-chichi.firebaseapp.com",
    projectId: "my-chatapp-chichi",
    storageBucket: "my-chatapp-chichi.appspot.com",
    messagingSenderId: "368608083167",
    appId: "1:368608083167:web:5f712c594bef5e9a977d6a"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;