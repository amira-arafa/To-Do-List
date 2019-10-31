import { all } from "redux-saga/effects";
import { watchAll } from "./initialSaga";

export default function* rootSaga() {
  yield all([watchAll()]);
}
