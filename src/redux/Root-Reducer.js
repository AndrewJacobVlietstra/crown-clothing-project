import { combineReducers } from "redux";
import userReducer from "./user/User.Reducer";
import cartReducer from "./cart/cart.reducer";
import pathReducer from "./path/path.reducer";

// This object from combineReducers is the state of the redux store
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  path: pathReducer,
})

export default rootReducer;