// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWtcVUp2U2dP6VGEY-dMPWFB6YZlXORSA",
  authDomain: "todoappfirebase-6234e.firebaseapp.com",
  projectId: "todoappfirebase-6234e",
  storageBucket: "todoappfirebase-6234e.appspot.com",
  messagingSenderId: "551554032307",
  appId: "1:551554032307:web:94be2c963a51f4d10546c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);