// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYJFvSqAMM3jOJr-CYSJKXfwDA84q1Zw",
  authDomain: "usa-stables.firebaseapp.com",
  projectId: "usa-stables",
  storageBucket: "usa-stables.firebasestorage.app",
  messagingSenderId: "915489870016",
  appId: "1:915489870016:web:8946da7093705bfeec9d25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,
  doc,
  getDoc,
  deleteDoc,
  collection,
  updateDoc,
  query,
  onSnapshot,
  setDoc,
  addDoc,
  Timestamp,
};
