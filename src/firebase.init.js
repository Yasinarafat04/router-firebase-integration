// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNDJOjNFMYcUcLQO5qS0FO8Pznu3e9W88",
    authDomain: "router-firebase-integrat-a4dbd.firebaseapp.com",
    projectId: "router-firebase-integrat-a4dbd",
    storageBucket: "router-firebase-integrat-a4dbd.appspot.com",
    messagingSenderId: "739804492417",
    appId: "1:739804492417:web:71b249efee4514d61c5380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;