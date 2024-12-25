import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDA9PIpNZ37VX3w3xaYuO8DE9gCrzssB14",
  authDomain: "myapp-9435f.firebaseapp.com",
  projectId: "myapp-9435f",
  storageBucket: "myapp-9435f.firebasestorage.app",
  messagingSenderId: "19351214258",
  appId: "1:19351214258:web:627e97033242ddf81e11ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword };
