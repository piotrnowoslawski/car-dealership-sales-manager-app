import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import usersReducer from "./users.reducer";
import userInfoReducer from "./userInfo.reducer";
import userManagementReducer from "./userManagement.reducer";

const rootReducer = combineReducers({
  authReducer,
  usersReducer,
  userInfoReducer,
  userManagementReducer,
});

export default rootReducer;
