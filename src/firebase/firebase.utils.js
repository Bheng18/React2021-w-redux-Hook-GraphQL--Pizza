import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBck8dls0FC2E96qVvbAc42IvXTmKGgUqs",
    authDomain: "pizza-db-7dab9.firebaseapp.com",
    projectId: "pizza-db-7dab9",
    storageBucket: "pizza-db-7dab9.appspot.com",
    messagingSenderId: "268385038268",
    appId: "1:268385038268:web:dbcf67e651bedda73385b9",
    measurementId: "G-MR8C9456F4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;