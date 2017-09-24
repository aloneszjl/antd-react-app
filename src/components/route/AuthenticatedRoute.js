import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../containers/auth/ducks";

const AuthenticatedRoute = ({ component: C, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !!isAuthenticated ? (
        <C {...props} />
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${props.location
            .search}`}
        />
      )}
  />
);

const mapStateToProps = state => {
  console.log(isAuthenticated(state));
  return {
    isAuthenticated: isAuthenticated(state)
  };
};

export default connect(mapStateToProps)(AuthenticatedRoute);
