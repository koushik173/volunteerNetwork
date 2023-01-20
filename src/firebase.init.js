// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv_LwbDIASEfOgHZMMtso36a2sjoOqBcg",
    authDomain: "volunteer-c90e8.firebaseapp.com",
    projectId: "volunteer-c90e8",
    storageBucket: "volunteer-c90e8.appspot.com",
    messagingSenderId: "838664915752",
    appId: "1:838664915752:web:c7858a948804f3ee0c9e1d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;