// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRGzVYQEdgaPl1oi1HoL5shgqScN-kceQ",
  authDomain: "netlixgpt-e3ecd.firebaseapp.com",
  projectId: "netlixgpt-e3ecd",
  storageBucket: "netlixgpt-e3ecd.appspot.com",
  messagingSenderId: "403862342152",
  appId: "1:403862342152:web:fa1b4b04d3bf9b8cbc5fbd",
  measurementId: "G-5XWC7XRNHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();