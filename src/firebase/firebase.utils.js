import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-Um1JhQ98YGE7mffskRZutblZmfz4pfE",
  authDomain: "e-commerce-db-cc686.firebaseapp.com",
  databaseURL: "https://e-commerce-db-cc686.firebaseio.com",
  projectId: "e-commerce-db-cc686",
  storageBucket: "e-commerce-db-cc686.appspot.com",
  messagingSenderId: "197620706973",
  appId: "1:197620706973:web:73f9e57ae4f6f4c6fe2e74",
  measurementId: "G-C4ESRS2Z60",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
