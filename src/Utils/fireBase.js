// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrWMx8usatQlfn74fqWL5ij2zUsDL-T1U",
  authDomain: "netflixgpt-b4dd9.firebaseapp.com",
  projectId: "netflixgpt-b4dd9",
  storageBucket: "netflixgpt-b4dd9.firebasestorage.app",
  messagingSenderId: "840190186275",
  appId: "1:840190186275:web:63832f609be03fbc5d7296",
  measurementId: "G-QR8HENK78J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);