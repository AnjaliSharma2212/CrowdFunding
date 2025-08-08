// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAFaNIfPrPcE_2wxXdjFZ1BGtNAeOLgoI",
  authDomain: "crowdfunding-245b3.firebaseapp.com",
  projectId: "crowdfunding-245b3",
  storageBucket: "crowdfunding-245b3.firebasestorage.app",
  messagingSenderId: "651959094412",
  appId: "1:651959094412:web:8f185aab8d6f2bc6b8bfa9",
  measurementId: "G-V9EG7V32DT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
