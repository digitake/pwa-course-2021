
import firebase from 'firebase'

//insert config from firebase
const firebaseConfig = {
  apiKey: "AIzaSyB32XP9AV65c9usbq5OOOJia5h3HoXHXpg",
  authDomain: "chatapp-pwa-course-test.firebaseapp.com",
  databaseURL: "https://chatapp-pwa-course-test-default-rtdb.firebaseio.com",
  projectId: "chatapp-pwa-course-test",
  storageBucket: "chatapp-pwa-course-test.appspot.com",
  messagingSenderId: "952065761994",
  appId: "1:952065761994:web:0436a4c50179e6388c4a33"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
