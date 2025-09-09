// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2Af2z10duNrXiJTmUqiwCclnNuHc2keg",
  authDomain: "ai-chatnotes.firebaseapp.com",
  projectId: "ai-chatnotes",
  appId: "1:714507919910:web:ae6eac1c250150ef523ce7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
