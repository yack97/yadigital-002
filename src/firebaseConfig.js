import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_-Q-X27unfJX9zKxaHlon3LIL8IVRU5A",
  authDomain: "roninmez-001.firebaseapp.com",
  projectId: "roninmez-001",
  storageBucket: "roninmez-001.appspot.com",
  messagingSenderId: "947987712112",
  appId: "1:947987712112:web:a0123aa15c2047fd9accb5",
  measurementId: "G-9PT72JDP8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };