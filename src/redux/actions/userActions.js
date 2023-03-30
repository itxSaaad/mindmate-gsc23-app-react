import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_PWD_RESET_FAIL,
  USER_PWD_RESET_REQUEST,
  USER_PWD_RESET_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstants.js";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { addDoc, collection } from "firebase/firestore";

import { app, db } from "../../firebase.js";

export const loginWithEmailAndPassword =
  (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userCredential.user,
      });

      localStorage.setItem("userInfo", JSON.stringify(userCredential.user));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const loginWithGoogle = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: userCredential.user,
    });

    localStorage.setItem("userInfo", JSON.stringify(userCredential.user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const auth = getAuth(app);
    await signOut(auth);

    localStorage.removeItem("userInfo");

    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerWithEmailAndPassword =
  (name, email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const newUser = {
        uid: userCredential.user.uid,
        name: userCredential.user.displayName,
        email: userCredential.user.email,
        isAdmin: false,
        authProvider: "local",
      };

      await addDoc(collection(db, "users"), newUser);

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: userCredential.user,
      });

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userCredential.user,
      });

      localStorage.setItem("userInfo", JSON.stringify(userCredential.user));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const sendPasswordResetEmailAction = (email) => async (dispatch) => {
  try {
    dispatch({ type: USER_PWD_RESET_REQUEST });

    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);

    dispatch({ type: USER_PWD_RESET_SUCCESS });
  } catch (error) {
    dispatch({
      type: USER_PWD_RESET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: USER_DETAILS_SUCCESS,
          payload: user,
        });
      } else {
        dispatch({
          type: USER_DETAILS_FAIL,
          payload: "User not found",
        });
      }
    });
  } catch (error) {
    dispatch({
      type: USER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

    const auth = getAuth(app);
    await updateProfile(auth.currentUser, {
      displayName: user.name,
    });

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: user,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
