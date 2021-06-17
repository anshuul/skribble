import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD0zBcZHmDVH3g-wCeMfTZ2r34YoozkniQ",
  authDomain: "skribble-ae793.firebaseapp.com",
  projectId: "skribble-ae793",
  storageBucket: "skribble-ae793.appspot.com",
  messagingSenderId: "223890673069",
  appId: "1:223890673069:web:473e45c825fd27bfae2524",
  measurementId: "G-YEHJGHG23M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
