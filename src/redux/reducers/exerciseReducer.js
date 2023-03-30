import {
  EXERCISE_LIST_REQUEST,
  EXERCISE_LIST_SUCCESS,
  EXERCISE_LIST_FAIL,
} from "../constants/exerciseConstants";

export const exercisesListReducer = (state = { exercises: [] }, action) => {
  switch (action.type) {
    case EXERCISE_LIST_REQUEST:
      return { loading: true, exercises: [] };
    case EXERCISE_LIST_SUCCESS:
      return {
        loading: false,
        exercises: action.payload,
      };
    case EXERCISE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
