// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6MPOdXlpQh22p944NZ19jmqz-mtHQBz8",
  authDomain: "healthsure-2115a.firebaseapp.com",
  projectId: "healthsure-2115a",
  storageBucket: "healthsure-2115a.appspot.com",
  messagingSenderId: "687088350747",
  appId: "1:687088350747:web:fe4baab7dbfff060e0aabe"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
