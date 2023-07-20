// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOJZypnKC_sW4Yfg1kXJjdLHjLR6ffE_I",
  authDomain: "event-hub-9e49f.firebaseapp.com",
  projectId: "event-hub-9e49f",
  storageBucket: "event-hub-9e49f.appspot.com",
  messagingSenderId: "433175861644",
  appId: "1:433175861644:web:85f86c1a79c2564d895ea9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
