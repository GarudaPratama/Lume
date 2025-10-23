import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnOFAMRCabUR2LFUMYJdKYzutSOfn58jE",
  authDomain: "lume-ai-805b5.firebaseapp.com",
  projectId: "lume-ai-805b5",
  storageBucket: "lume-ai-805b5.firebasestorage.app",
  messagingSenderId: "989349742757",
  appId: "1:989349742757:web:340a31f0d16c215cc0e54c",
  measurementId: "G-QX1YV0SZBF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
