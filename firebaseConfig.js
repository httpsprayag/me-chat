import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBV5EQ8BaD_Q2G035BxckkZdFtfQ8BZhy8",
  authDomain: "we-meet-15.firebaseapp.com",
  projectId: "we-meet-15",
  storageBucket: "we-meet-15.appspot.com",
  messagingSenderId: "1026575344062",
  appId: "1:1026575344062:web:a82047b2031232a4b759ef",
  measurementId: "G-L7HM33C1E0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
