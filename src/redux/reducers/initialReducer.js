import * as actionTypes from "../actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.INITIAL_TYPE:
      return { ...state, initialState: [] };
    default:
      return state;
  }
};
