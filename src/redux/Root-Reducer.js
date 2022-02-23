import { combineReducers } from "redux";
import userReducer from "./user/User.Reducer";

export default combineReducers({
  user: userReducer,
})