import {
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_SUCCESS,
  ARTICLE_LIST_FAIL,
  ARTICLE_DETAILS_REQUEST,
  ARTICLE_DETAILS_SUCCESS,
  ARTICLE_DETAILS_FAIL,
  ARTICLE_DELETE_REQUEST,
  ARTICLE_DELETE_SUCCESS,
  ARTICLE_DELETE_FAIL,
  ARTICLE_CREATE_REQUEST,
  ARTICLE_CREATE_SUCCESS,
  ARTICLE_CREATE_FAIL,
  ARTICLE_UPDATE_REQUEST,
  ARTICLE_UPDATE_SUCCESS,
  ARTICLE_UPDATE_FAIL,
} from "../constants/articleConstants.js";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export const listArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ARTICLE_LIST_REQUEST });
    const articles = [];

    const querySnapshot = await getDocs(collection(db, "articles"));

    querySnapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });

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
    const article = await getDocs(collection(db, "articles"));

    dispatch({
      type: ARTICLE_DETAILS_SUCCESS,
      payload: article,
    });
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
    const article = await getDocs(collection(db, "articles"));

    dispatch({
      type: ARTICLE_CREATE_SUCCESS,
      payload: article,
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
