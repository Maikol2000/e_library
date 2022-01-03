import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_Uj-qUDDgeyVI1o1uaZnK319O2s1BFqw",
  authDomain: "e-library-c5aed.firebaseapp.com",
  projectId: "e-library-c5aed",
  storageBucket: "e-library-c5aed.appspot.com",
  messagingSenderId: "688190313961",
  appId: "1:688190313961:web:6e579ba11148d53812e778"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()