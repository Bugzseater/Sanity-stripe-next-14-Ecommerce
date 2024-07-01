// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACNtd3jWbGObHrW-O308kHMNQZ0WcmTmg",
  authDomain: "tech-shop-70df7.firebaseapp.com",
  projectId: "tech-shop-70df7",
  storageBucket: "tech-shop-70df7.appspot.com",
  messagingSenderId: "199386543275",
  appId: "1:199386543275:web:4bb0f12d78d81c474773ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore(app);