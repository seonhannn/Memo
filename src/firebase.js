// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRofHH2IoPy9HHx8A2IimTSBS5GCg9-H8",
    authDomain: "memo-8a72a.firebaseapp.com",
    projectId: "memo-8a72a",
    storageBucket: "memo-8a72a.appspot.com",
    messagingSenderId: "189020679355",
    appId: "1:189020679355:web:bbfde109f6dbed5ccd8d9e",
    measurementId: "G-HEGB93B8GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);