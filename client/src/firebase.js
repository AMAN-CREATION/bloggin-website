// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a95a6.firebaseapp.com",
  projectId: "mern-blog-a95a6",
  storageBucket: "mern-blog-a95a6.appspot.com",
  messagingSenderId: "628789525010",
  appId: "1:628789525010:web:6c97a85515ca5400f2b6cb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
