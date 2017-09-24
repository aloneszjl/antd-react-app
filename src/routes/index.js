import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { AuthenticatedRoute, AppliedRoute, PageNotFound } from "../components";

import { TabPage } from "./tab-page";
import { Login } from "./login";

export default () => (
  <Switch>
    <Route exact push path="/" render={() => <Redirect to="/tab/home" />} />
    <AuthenticatedRoute path="/tab/:item" exact component={TabPage} />
    <AppliedRoute path="/login" exact component={Login} />
    <AppliedRoute component={PageNotFound} />
  </Switch>
);
