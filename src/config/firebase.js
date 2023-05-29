import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBIvhyMjsktvrA6u1RMGZoCx0ywvx5OzEQ",
  authDomain: "viktor-webshop-final-firebase.firebaseapp.com",
  projectId: "viktor-webshop-final-firebase",
  storageBucket: "viktor-webshop-final-firebase.appspot.com",
  messagingSenderId: "338805231096",
  appId: "1:338805231096:web:32e1c6b7919983db3e1a0d",
  measurementId: "G-X58FHGSBBY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

