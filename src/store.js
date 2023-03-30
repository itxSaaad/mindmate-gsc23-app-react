import { composeWithDevTools } from "@redux-devtools/extension";
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import {
  userDetailsReducer,
  userLoginReducer,
  userPwdResetReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./redux/reducers/userReducers.js";

import {
  articleCreateReducer,
  articleDetailsReducer,
  articlesListReducer,
} from "./redux/reducers/articleReducer.js";

import { exercisesListReducer } from "./redux/reducers/exerciseReducer.js";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userPwdReset: userPwdResetReducer,
  articlesList: articlesListReducer,
  articleDetails: articleDetailsReducer,
  articleCreate: articleCreateReducer,
  exercisesList: exercisesListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
