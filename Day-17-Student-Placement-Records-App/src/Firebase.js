
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3okto8Sz2JrxtQv7f_1ms4fOOD9xB76o",
  authDomain: "refbssruh22-dec25.firebaseapp.com",
  databaseURL: "https://refbssruh22-dec25-default-rtdb.firebaseio.com",
  projectId: "refbssruh22-dec25",
  storageBucket: "refbssruh22-dec25.firebasestorage.app",
  messagingSenderId: "339365065798",
  appId: "1:339365065798:web:03ab9f9815cbbd6d77c647"
};

const app = initializeApp(firebaseConfig);
const db=getDatabase(app);

export default db;