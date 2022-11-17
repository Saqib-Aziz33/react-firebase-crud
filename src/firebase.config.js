// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtky2ssEnrDJO-wf1mEkRVO2UAifpOXeQ",
  authDomain: "react-crud-8aceb.firebaseapp.com",
  projectId: "react-crud-8aceb",
  storageBucket: "react-crud-8aceb.appspot.com",
  messagingSenderId: "909274751562",
  appId: "1:909274751562:web:6b30b0a3e9a542dc8fbcb3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
