import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import querystring from "query-string";
import { isAuthenticated } from "../../containers/auth/ducks";
import { getCurrentRoute } from "../../utils/route";

const UnauthenticatedRoute = ({
  component: C,
  serch,
  isAuthenticated,
  ...rest
}) => {
  const { redirect } = querystring.parse(serch);
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <C {...props} />
        ) : (
          <Redirect
            to={redirect === "" || redirect === null ? "/" : redirect}
          />
        )}
    />
  );
};
const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
  serch: getCurrentRoute(state).serch || ""
});
export default connect(mapStateToProps)(UnauthenticatedRoute);
