import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyB6PYvncsp_7qCy7yVENhwUM4dqu768YM8",
  authDomain: "bake-corner.firebaseapp.com",
  projectId: "bake-corner",
  storageBucket: "bake-corner.appspot.com",
  messagingSenderId: "446129378662",
  appId: "1:446129378662:web:f30a306f76fe2e5c9924a7",
  measurementId: "G-V3HDCE4E2E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
