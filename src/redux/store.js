import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from 'redux-persist';
import rootReducer from "./Root-Reducer";

const middleWares = [logger];

// Create store and pass in the rootReducer which contains initial state for the store to have
// as well as cases/logic on how to update the state in the event of certain actions being dispatched to the root reducer
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);