import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // represents localStorage on window object

import userReducer from "./user/User.Reducer";
import cartReducer from "./cart/cart.reducer";
import pathReducer from "./path/path.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] // state to persist in localStorage
};

// This object from combineReducers is the state of the redux store
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  path: pathReducer,
  directory: directoryReducer,
})

export default persistReducer(persistConfig, rootReducer);