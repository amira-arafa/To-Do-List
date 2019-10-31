import * as actionTypes from "../actionTypes";

// action creators calling on saga
export const initialActionSaga = () => ({
  type: actionTypes.INITIAL_TYPE_SAGA
});

// action creators dispatching actions
export const initialAction = () => ({ type: actionTypes.INITIAL_TYPE });
