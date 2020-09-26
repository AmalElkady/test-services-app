import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  project: projectReducer,
  contact: contactReducer
});

export default rootReducer;
