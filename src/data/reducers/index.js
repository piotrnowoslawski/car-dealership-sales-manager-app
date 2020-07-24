import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
import usersReducer from "./users.reducer";
import userInfoReducer from "./userInfo.reducer";
import userManagementReducer from "./userManagement.reducer";
import workplacesReducer from "./workplaces.reducer";
import workplaceInfoReducer from "./workplaceInfo.reducer";
import workplaceManagementReducer from "./workplaceManagement.reducer";
import genderReducer from "./gender.reducer";
import jobsReducer from "./jobs.reducer";

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  usersReducer,
  userInfoReducer,
  userManagementReducer,
  workplacesReducer,
  workplaceInfoReducer,
  workplaceManagementReducer,
  genderReducer,
  jobsReducer,
});

export default rootReducer;
