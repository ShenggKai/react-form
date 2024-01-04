import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import questionReducer from "../reducers/questionReducer";

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
});

export default rootReducer;
