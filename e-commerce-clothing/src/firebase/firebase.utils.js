import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA9XcCflW6jx4taN1ctw9RCRdslksjJD7g",
    authDomain: "e-commerce-crown-cltn.firebaseapp.com",
    projectId: "e-commerce-crown-cltn",
    storageBucket: "e-commerce-crown-cltn.appspot.com",
    messagingSenderId: "108038753747",
    appId: "1:108038753747:web:32be808ccd9ad158fef326"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;