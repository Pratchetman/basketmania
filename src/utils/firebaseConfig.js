// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "basketmania-e327b.firebaseapp.com",
  databaseURL: "https://basketmania-e327b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "basketmania-e327b",
  storageBucket: "basketmania-e327b.appspot.com",
  messagingSenderId: "545956752649",
  appId: "1:545956752649:web:cb0a8d5b28b6e6aa1337d8",
  measurementId: "G-H4RF9TD14L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);