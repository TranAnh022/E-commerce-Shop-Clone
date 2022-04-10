// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDFfbxt9Ft4FU1HHpG4MoUWafI2KY6yzFk",
    authDomain: "clone-91b56.firebaseapp.com",
    projectId: "clone-91b56",
    storageBucket: "clone-91b56.appspot.com",
    messagingSenderId: "120690043663",
    appId: "1:120690043663:web:01d5297506bf13216bec7a",
    measurementId: "G-772W40B0ZM"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };