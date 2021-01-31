import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcb5TiCr23pnDjvkIOudvbnoqvHLKN1K0",
  authDomain: "crown-db-ceb6a.firebaseapp.com",
  projectId: "crown-db-ceb6a",
  storageBucket: "crown-db-ceb6a.appspot.com",
  messagingSenderId: "58698453825",
  appId: "1:58698453825:web:5b046f683c6479a6b887c0",
  measurementId: "G-T06SSZS5L4",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // IF USER SIGNED OUT
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user : ", err);
    }
  }
  return userRef;
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
