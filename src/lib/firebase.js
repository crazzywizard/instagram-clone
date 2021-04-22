import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAQEkk8A1N6p-t6tq1sbwmi87VTCCLcojM',
  authDomain: 'insta-clone-54a34.firebaseapp.com',
  projectId: 'insta-clone-54a34',
  storageBucket: 'insta-clone-54a34.appspot.com',
  messagingSenderId: '153657042513',
  appId: '1:153657042513:web:863b21bf3d0272062cfa70',
  measurementId: 'G-4V9G1KNXRH'
};

const firebase = Firebase.initializeApp(config);
const db = firebase.firestore();
const { FieldValue } = Firebase.firestore;
export { firebase, FieldValue, db };
