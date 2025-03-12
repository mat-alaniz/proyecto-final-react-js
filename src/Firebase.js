// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVSC3PNGzi9LieXrrplKFDbMbf0BZau3k",
  authDomain: "prueba-dd426.firebaseapp.com",
  projectId: "prueba-dd426",
  storageBucket: "prueba-dd426.firebasestorage.app",
  messagingSenderId: "708419586290",
  appId: "1:708419586290:web:3a3f4d7c69d33d9215286b",
  measurementId: "G-VT823Q7LTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);