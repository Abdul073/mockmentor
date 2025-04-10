import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA91Hao5iyB5hf_JHAc3ex9Eva_Rs6Qm2o",
  authDomain: "mockmentor-417bc.firebaseapp.com",
  projectId: "mockmentor-417bc",
  storageBucket: "mockmentor-417bc.firebasestorage.app",
  messagingSenderId: "718212068044",
  appId: "1:718212068044:web:58afb8a864f95aba448869",
  measurementId: "G-CK0CW3NQH2",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
