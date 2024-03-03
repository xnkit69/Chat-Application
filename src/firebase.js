// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC10hGUMytOOW8KaPS0y_KCZ1XEy315Lc4",
  authDomain: "x-chat-website.firebaseapp.com",
  projectId: "x-chat-website",
  storageBucket: "x-chat-website.appspot.com",
  messagingSenderId: "196629310348",
  appId: "1:196629310348:web:1eda04643eb7d84de744a9",
  measurementId: "G-VLYZKX8NX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
