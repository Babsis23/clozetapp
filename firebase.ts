import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTuhO9JhYo2pTduwsWfvzPbf58mgzM40Q",

  authDomain: "clozet-c170a.firebaseapp.com",

  projectId: "clozet-c170a",

  storageBucket: "clozet-c170a.firebasestorage.app",

  messagingSenderId: "24466511700",

  appId: "1:24466511700:web:d6098fe53061c72a5f5ac1",

};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
