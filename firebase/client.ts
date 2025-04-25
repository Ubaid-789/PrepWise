import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1EGfQQGJD1JNhGUeKhFWlyCle84dUlb4",
  authDomain: "prepwise---interview-platform.firebaseapp.com",
  projectId: "prepwise---interview-platform",
  storageBucket: "prepwise---interview-platform.firebasestorage.app",
  messagingSenderId: "724382913698",
  appId: "1:724382913698:web:04d32fc981b10cbba533fb",
  measurementId: "G-ZNCE4F7GMV",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
