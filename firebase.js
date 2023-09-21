// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjxtIG8YWZx750Szq8f_tpoUwt6gN0q2U",
  authDomain: "magic-board-21923.firebaseapp.com",
  projectId: "magic-board-21923",
  storageBucket: "magic-board-21923.appspot.com",
  messagingSenderId: "931072368181",
  appId: "1:931072368181:web:44e356468ad497260f5b7c",
  measurementId: "G-NSQ83BMKRB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
