import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
} from "../constants/exerciseConstants";

import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

export const listExercises = () => async (dispatch) => {
  try {
    dispatch({ type: EXERCISE_LIST_REQUEST });

    const querySnapshot = await getDocs(collection(db, "exercises"));
    const exercises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    dispatch({
      type: EXERCISE_LIST_SUCCESS,
      payload: exercises,
    });
  } catch (error) {
    dispatch({
      type: EXERCISE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
