// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDD0LLMKW2ut4xsyeVaTAVncJY1Y-VeFsA",
  authDomain: "e-commerce-app-ad41f.firebaseapp.com",
  projectId: "e-commerce-app-ad41f",
  storageBucket: "e-commerce-app-ad41f.appspot.com",
  messagingSenderId: "289365988355",
  appId: "1:289365988355:web:760b81b1e266bf96ceea36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


