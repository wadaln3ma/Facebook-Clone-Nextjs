
import { getApps, getApp, initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyACrUtybbEBHPq6y4qaQlpwyf0vwpC4-z4",
  authDomain: "fcb-clone.firebaseapp.com",
  projectId: "fcb-clone",
  storageBucket: "fcb-clone.appspot.com",
  messagingSenderId: "879890401694",
  appId: "1:879890401694:web:bb3680a6ccdf0e072c6e8f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore(app)

const storage = getStorage(app)

export { db, storage }

