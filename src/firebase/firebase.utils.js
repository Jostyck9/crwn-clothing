import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAxjLZai3jFY0pWG-Qgr7PoG13A64cMBho",
    authDomain: "crwn-db-efba9.firebaseapp.com",
    projectId: "crwn-db-efba9",
    storageBucket: "crwn-db-efba9.appspot.com",
    messagingSenderId: "797696556035",
    appId: "1:797696556035:web:60c2da05d23c59a9f36236",
    measurementId: "G-2YTLKXYSTM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
