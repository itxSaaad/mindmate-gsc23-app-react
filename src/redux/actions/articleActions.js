import {
  ARTICLE_CREATE_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_DETAILS_FAIL,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
} from "../constants/articleConstants.js";

import { doc, collection, getDoc, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });

    const querySnapshot = await getDocs(collection(db, "articles"));
    const articles = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: ARTICLE_LIST_SUCCESS,
      payload: articles,
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listArticleDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_DETAILS_REQUEST });

    const articleRef = doc(db, "articles", id);
    const article = await getDoc(articleRef);

    if (article.exists()) {
      const data = { id: article.id, ...article.data() };

      dispatch({
        type: ARTICLE_DETAILS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ARTICLE_DETAILS_FAIL,
        payload: "Article not found",
      });
    }
  } catch (error) {
    dispatch({
      type: ARTICLE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createArticle = (article) => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_CREATE_REQUEST });

    const docRef = await addDoc(collection(db, "articles"), article);

    dispatch({
      type: ARTICLE_CREATE_SUCCESS,
      payload: { id: docRef.id, ...article },
    });
  } catch (error) {
    dispatch({
      type: ARTICLE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
