import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmgsTg1iKCnyMiLmBWdtFvrGs81AV4euI",
  authDomain: "mindmate-gsc23.firebaseapp.com",
  projectId: "mindmate-gsc23",
  storageBucket: "mindmate-gsc23.appspot.com",
  messagingSenderId: "410647285012",
  appId: "1:410647285012:web:87111de937071b29378601",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
