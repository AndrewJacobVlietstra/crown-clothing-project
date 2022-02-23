import { combineReducers } from "redux";
import userReducer from "./user/User.Reducer";

// This object from combineReducers is the state of the redux store
const rootReducer = combineReducers({
  user: userReducer,
})

export default rootReducer;