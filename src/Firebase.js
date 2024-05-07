// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


//import authentification
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "task-app-d09fa.firebaseapp.com",
  projectId: "task-app-d09fa",
  storageBucket: "task-app-d09fa.appspot.com",
  messagingSenderId: "358144656123",
  appId: "1:358144656123:web:b80086a869f8219554a65e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);

export const auth = getAuth();


