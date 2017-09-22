import React from "react";
import { Route, Switch } from "react-router-dom";
import { TabPage } from "./tab-page";
import "../style/theme";

export default () => (
  <Switch>
    <Route path="/tab/:item" exact component={TabPage} />
    <Route path="/foo" exact component={() => <div>你好</div>} />
  </Switch>
);
