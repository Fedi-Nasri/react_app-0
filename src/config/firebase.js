// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAefidnA2ks6PS1ZISp5_ZnmvO1-cj54nk",
  authDomain: "learning-webapp-0.firebaseapp.com",
  projectId: "learning-webapp-0",
  storageBucket: "learning-webapp-0.appspot.com",
  messagingSenderId: "1041029549559",
  appId: "1:1041029549559:web:51781087bf671b4b91b2f2",
  measurementId: "G-CM566RECVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);