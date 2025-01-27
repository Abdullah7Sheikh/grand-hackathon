import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL3_jQ7kBnNyfxilZEGJ0u53UNve6OMpo",
  authDomain: "final-hackathon-995e3.firebaseapp.com",
  projectId: "final-hackathon-995e3",
  storageBucket: "final-hackathon-995e3.firebasestorage.app",
  messagingSenderId: "1068382685716",
  appId: "1:1068382685716:web:a09fe83aa9a0e3f74d7501"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider(); 