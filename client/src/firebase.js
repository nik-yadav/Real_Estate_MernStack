// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7263b.firebaseapp.com",
  projectId: "mern-estate-7263b",
  storageBucket: "mern-estate-7263b.appspot.com",
  messagingSenderId: "77065797545",
  appId: "1:77065797545:web:81cde5df0caafd4b58ceb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);