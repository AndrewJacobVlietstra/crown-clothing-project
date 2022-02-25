import pathActionTypes from "./path.action.types";

const INITIAL_STATE = {
  currentPath: window.location.pathname
};

const pathReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pathActionTypes.HANDLE_PATH_CHANGE:
      return {
        ...state,
        currentPath: window.location.pathname
      }
      
    default:
      return state;
  }
}

export default pathReducer;