import { initializeApp } from "firebase/app";

import {
  getFirestore,
  getDocs,
  doc,
  getDoc,
  collection,
  addDoc,
} from "firebase/firestore";

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

const getArticles = async () => {
  try {
    const articlesCollection = collection(db, "articles");
    const articlesSnapshot = await getDocs(articlesCollection);
    const articles = articlesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return articles;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
    alert(err.message);
  }
};

// fetch single article
const getArticle = async (id) => {
  try {
    const docRef = doc(db, "articles", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
    }
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
  }
};

const addArticles = async (newArticle) => {
  //add new document from the data filled in the form
  try {
    const docRef = await addDoc(collection(db, "articles"), newArticle);
    return docRef.id;
  } catch (err) {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode, errorMessage);
  }
};

export { getArticles, getArticle, addArticles };
