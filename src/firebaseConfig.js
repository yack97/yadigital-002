import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDivzkpFhToMm6hf8o-92uhghng7K11pxY",
    authDomain: "yadigital-002.firebaseapp.com",
    projectId: "yadigital-002",
    storageBucket: "yadigital-002.appspot.com",
    messagingSenderId: "269506661476",
    appId: "1:269506661476:web:9d2871fa81d68886d3a371",
    measurementId: "G-BKFDW1MFFW"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };