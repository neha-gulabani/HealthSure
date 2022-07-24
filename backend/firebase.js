// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6GyiMdunSzJOHTeTnbauHSw5hSXy0duc",
  authDomain: "healthsure-9dd18.firebaseapp.com",
  projectId: "healthsure-9dd18",
  storageBucket: "healthsure-9dd18.appspot.com",
  messagingSenderId: "951524258216",
  appId: "1:951524258216:web:0728ec3d7e9d34f9d26d9d",
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
