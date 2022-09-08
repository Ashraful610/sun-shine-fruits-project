import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOd5SloUl75KQ3lTXytvxQcQRYtYLux68",
  authDomain: "sun-shine-fruits-stock-project.firebaseapp.com",
  projectId: "sun-shine-fruits-stock-project",
  storageBucket: "sun-shine-fruits-stock-project.appspot.com",
  messagingSenderId: "544435159639",
  appId: "1:544435159639:web:252c4e6ce3426425041912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;