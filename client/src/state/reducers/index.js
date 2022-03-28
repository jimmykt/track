import { combineReducers } from "redux";

import storeUser from "./storeUserReducer";
import isLoggedReducer from "./isLoggedReducer";

const allReducers = combineReducers({
  User: storeUser,
  IsLogged: isLoggedReducer,
});

export default allReducers;
