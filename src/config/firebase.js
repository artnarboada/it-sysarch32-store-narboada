// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgrDIXO9wR_ul5Eb3qM0r7OTGIKPS5558",
  authDomain: "it-sysarch32-store-narboada.firebaseapp.com",
  projectId: "it-sysarch32-store-narboada",
  storageBucket: "it-sysarch32-store-narboada.appspot.com",
  messagingSenderId: "399805250637",
  appId: "1:399805250637:web:9be2fd97e809343ca53004",
  measurementId: "G-X490KYLQM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app)