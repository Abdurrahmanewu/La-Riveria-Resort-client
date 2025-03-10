// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC62oXmoM9jXf3jv5nunw6sbZPkcKUuz8Q",
  authDomain: "la-riveria-resort-park.firebaseapp.com",
  projectId: "la-riveria-resort-park",
  storageBucket: "la-riveria-resort-park.firebasestorage.app",
  messagingSenderId: "95302150035",
  appId: "1:95302150035:web:9fb38cc14bd58c35342a66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;