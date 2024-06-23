import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC885WVHepZ6D04JBtgUvs8YM4_AZoub3w",
  authDomain: "reactchat-6f54e.firebaseapp.com",
  projectId: "reactchat-6f54e",
  storageBucket: "reactchat-6f54e.appspot.com",
  messagingSenderId: "454018106447",
  appId: "1:454018106447:web:89543500120090bdb6d63a",
  measurementId: "G-4GPRD95HFF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
