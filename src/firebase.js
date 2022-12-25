// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLgN_9ACoVWPHByHl0YrE1CIyaBM4mccc",
  authDomain: "discord-clone-404c2.firebaseapp.com",
  projectId: "discord-clone-404c2",
  storageBucket: "discord-clone-404c2.appspot.com",
  messagingSenderId: "559954226406",
  appId: "1:559954226406:web:a0d90cddfa2f91c065df27",
  measurementId: "G-8MDVY43C1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);