import { put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import * as actionCreators from "../actions";

export function* initialSaga() {
  yield put(actionCreators.initialAction());
}

export function* watchAll() {
  yield takeEvery(actionTypes.INITIAL_TYPE_SAGA, initialSaga);
}
