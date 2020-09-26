import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import contactReducer from "./contactReducer";
import supportReducer from "./supportReducer";
const rootReducer = combineReducers({
  project: projectReducer,
  contact: contactReducer,
  support: supportReducer
});

export default rootReducer;
