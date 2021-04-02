import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyA5R_WFFIjay7ico2i5SPZxlLbmi6Z9D2c",
authDomain: "my-chatapp-elijachinda.firebaseapp.com",
projectId: "my-chatapp-elijachinda",
storageBucket: "my-chatapp-elijachinda.appspot.com",
messagingSenderId: "655006984595",
appId: "1:655006984595:web:8c3cbfbc1976fe5bb86066"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;