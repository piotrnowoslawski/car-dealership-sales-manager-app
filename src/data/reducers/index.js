import { combineReducers } from "redux";
import usersReducer from "./users.reducer";
import userInfoReducer from "./userInfo.reducer";
import userManagementReducer from "./userManagement.reducer";

const rootReducer = combineReducers({
  usersReducer,
  userInfoReducer,
  userManagementReducer,
});

export default rootReducer;
