import { combineReducers } from "redux";
import initialReducer from "./initialReducer";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  initialState: initialReducer,
  form: formReducer
});
