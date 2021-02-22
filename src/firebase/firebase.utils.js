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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        // console.log(snapShot);
        if(!snapShot.exists){
           const { displayName, email } = userAuth;
           const createdAt = new Date();

           try{
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
              })
           }catch(err){
             console.log('oopps error ka boy', + err);
           }
        }
        return userRef;
    }

  // export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  //   const collectionRef = firestore.collection(collectionKey);

  //   const batch = firestore.batch();

  //   objectsToAdd.forEach(obj => {
  //     const newDocRef = collectionRef.doc();
  //     batch.set(newDocRef, obj);
  //   });

  //   return await batch.commit();
  // }

  export const convertCollectionSnapshotToMap = (collections) => {
     const transformedCollection = collections.docs.map(doc => {
       const { title, items } = doc.data();

       return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
       }
     });
     
     return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };

  export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe();
         resolve(userAuth);
      }, reject)
    })
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;