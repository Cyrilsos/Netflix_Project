import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsWJOd4PMF0g5sfIVk_KYMrAAyJubxdgU",
  authDomain: "netflix-proj1.firebaseapp.com",
  projectId: "netflix-proj1",
  storageBucket: "netflix-proj1.appspot.com",
  messagingSenderId: "849708811480",
  appId: "1:849708811480:web:7e10bd02db9dd6186743ad"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

