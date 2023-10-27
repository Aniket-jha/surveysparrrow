// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOmMv5pC-swZ_avBVRhZTtLmqOBXvDS8",
  authDomain: "survey-spider.firebaseapp.com",
  projectId: "survey-spider",
  storageBucket: "survey-spider.appspot.com",
  messagingSenderId: "5038829369",
  appId: "1:5038829369:web:0e4513d0afbaaa4bcb42e8",
  measurementId: "G-Z3QYT3H14B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth()
export const database = getDatabase(app)
export const  googleProvider = new GoogleAuthProvider()