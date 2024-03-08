import firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyApyRkBf7kbc4MTvM3Evhp0ocOq6XnBIKI",
  authDomain: "sphurti-2024.firebaseapp.com",
  databaseURL: "https://sphurti-2024-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sphurti-2024",
  storageBucket: "sphurti-2024.appspot.com",
  messagingSenderId: "244261493366",
  appId: "1:244261493366:web:ff520ce9f7fad7bd089d57",
  measurementId: "G-7Q60XLEWR0"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();