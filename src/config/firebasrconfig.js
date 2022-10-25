// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiq5tTSNC9Sv3rNQMrYKdbRsTvDJkqkOA",
  authDomain: "fir-class-e17cf.firebaseapp.com",
  projectId: "fir-class-e17cf",
  storageBucket: "fir-class-e17cf.appspot.com",
  messagingSenderId: "616118994013",
  appId: "1:616118994013:web:6c1302a32b9eb7cb9bb9b4",
  measurementId: "G-KFLS4F5K93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;