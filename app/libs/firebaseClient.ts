// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb-dqkbDgH9tuzaFrNAsCRhfK5Wcya4v0",
  authDomain: "my-taskwave.firebaseapp.com",
  projectId: "my-taskwave",
  storageBucket: "my-taskwave.firebasestorage.app",
  messagingSenderId: "901301440767",
  appId: "1:901301440767:web:4fd8c94023c4f0dfacfcca",
  measurementId: "G-L0DMPV68QY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
