import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEsxpEo5JxwWlWxbnmNkzzB2wDMZZn0Sw",
  authDomain: "netflix-clone-assignment.firebaseapp.com",
  projectId: "netflix-clone-assignment",
  storageBucket: "netflix-clone-assignment.appspot.com",
  messagingSenderId: "428446349049",
  appId: "1:428446349049:web:d50d8c91c3e20421545428"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

