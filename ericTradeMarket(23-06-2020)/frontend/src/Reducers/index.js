import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import headerReducer from "./headerReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  header: headerReducer,
});
