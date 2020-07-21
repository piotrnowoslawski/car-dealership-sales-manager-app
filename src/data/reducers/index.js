import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
import usersReducer from "./users.reducer";
import userInfoReducer from "./userInfo.reducer";
import userManagementReducer from "./userManagement.reducer";
import workplacesReducer from "./workplaces.reducer";

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  usersReducer,
  userInfoReducer,
  userManagementReducer,
  workplacesReducer,
});

export default rootReducer;
