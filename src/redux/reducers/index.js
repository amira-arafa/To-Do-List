import { combineReducers } from "redux";
import initialReducer from "./initialReducer";

export default combineReducers({
  initialState: initialReducer
});
