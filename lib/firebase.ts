import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiG25T4XQqbhZw8SK_j8F_UnmuVpfbIEc",
  authDomain: "desempenho-funcionarios.firebaseapp.com",
  projectId: "desempenho-funcionarios",
  storageBucket: "desempenho-funcionarios.firebasestorage.app",
  messagingSenderId: "660278188331",
  appId: "1:660278816833:web:e0d8c9226d4118c473d6c0",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
