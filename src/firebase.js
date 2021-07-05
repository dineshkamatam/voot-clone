import firebase from "firebase";
//Authentication
import "firebase/auth";

//realtime database
import "firebase/database";

//Storage can store images , videos , ....
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxfQX4hrwXHMsPMsAAzFsz4qf6bqLtBcM",
  authDomain: "voot-clone-37e8f.firebaseapp.com",
  projectId: "voot-clone-37e8f",
  storageBucket: "voot-clone-37e8f.appspot.com",
  messagingSenderId: "67907473691",
  appId: "1:67907473691:web:cbd1cad6103a28867903be",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
