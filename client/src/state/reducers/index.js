import { combineReducers } from "redux";

import counterReducer from "./counter";
import isLoggedReducers from "./isLoggedReducers";
import userReducer from "./userReducers";

const allReducers = combineReducers({
  User: userReducer,
  isLogged: isLoggedReducers,
  counterReducer,
});

export default allReducers;
