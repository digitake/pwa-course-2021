import firebase from 'firebase';

    
         // Your web app's Firebase configuration
    var firebaseConfig = {     
    apiKey: "AIzaSyDXlVodVAv9Bl7e9nc9nHoV3vkpZ3aQiKY",
    authDomain: "my-chatapp-for-pwa-nons.firebaseapp.com",
    projectId: "my-chatapp-for-pwa-nons",
    storageBucket: "my-chatapp-for-pwa-nons.appspot.com",
    messagingSenderId: "876131538436",
    appId: "1:876131538436:web:c13c8eca8e679b6b6f0751"
  };
  // Initialize Firebase
  
    
    firebase.initializeApp(firebaseConfig);

export default firebase;