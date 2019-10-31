import React from "react";
import { connect } from "react-redux";
import { initialActionSaga } from "../redux/actions";
// importing style
import "./InitialComponent.scss";

const InitialComp = props => {
  return (
    <header>
      <button onClick={() => props.initialActionSaga()}>try redux</button>
    </header>
  );
};

export default connect(
  null,
  { initialActionSaga }
)(InitialComp);
