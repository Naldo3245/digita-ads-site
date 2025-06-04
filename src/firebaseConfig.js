import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAm-uClDMLIw0Jnc2dqohOe4AOv61xohcA",
  authDomain: "digita-ads.firebaseapp.com",
  projectId: "digita-ads",
  storageBucket: "digita-ads.appspot.com",
  messagingSenderId: "807511415480",
  appId: "1:807511415480:web:3164d18a66dd547494f24d",
  measurementId: "G-TV9XXVECN0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
