import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../containers/auth/ducks';

const AuthenticatedRoute = ({
  component: C,
  isAuthenticated,
  ...rest
}: {
  component: any,
  isAuthenticated: boolean,
}) => (
  <Route
    {...rest}
    render={(props: { location: Object }) =>
      (isAuthenticated ? (
        <C {...props} />
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${props.location
            .search}`}
        />
      ))}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(AuthenticatedRoute);
