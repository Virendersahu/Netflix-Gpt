// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTIRAJ2FFVZB2_r4f3q8_WBvwI6P5p6qE",
  authDomain: "netflix-gpt-f4b85.firebaseapp.com",
  projectId: "netflix-gpt-f4b85",
  storageBucket: "netflix-gpt-f4b85.firebasestorage.app",
  messagingSenderId: "192966538162",
  appId: "1:192966538162:web:cf39fd48113605c3486aab",
  measurementId: "G-2TM7X1YL7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
