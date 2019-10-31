import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
// importing components
import InitialComp from "../components/InitialComponent";

const Routing = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={InitialComp} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
