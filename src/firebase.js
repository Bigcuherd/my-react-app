// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNIPagmzB23qmNGWE_uQiXGH_6Wl6JZ5c",
  authDomain: "tweaks-9eea7.firebaseapp.com",
  projectId: "tweaks-9eea7",
  storageBucket: "tweaks-9eea7.firebasestorage.app",
  messagingSenderId: "985080292835",
  appId: "1:985080292835:web:ead85af229a241246d2cd6",
  measurementId: "G-SZNSQ0327X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app }