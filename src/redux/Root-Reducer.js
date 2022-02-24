import { combineReducers } from "redux";
import userReducer from "./user/User.Reducer";
import cartReducer from "./cart/cart.reducer";

// This object from combineReducers is the state of the redux store
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default rootReducer;