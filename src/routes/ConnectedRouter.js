import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '../containers/theme/ducks';

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

class ConnectedRouter extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
    theme: PropTypes.object,
  };

  static contextTypes = {
    store: PropTypes.object,
  };

  handleLocationChange = location => {
    this.store.dispatch({
      type: LOCATION_CHANGE,
      payload: location,
    });
  };

  componentWillMount() {
    const { store: propsStore, history } = this.props;
    this.store = propsStore || this.context.store;
    this.handleLocationChange(history.location);
  }

  componentDidMount() {
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
  }

  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }

  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router {...this.props} />
      </ThemeProvider>
    );
  }
}

export default connect(state => ({ theme: getTheme(state) }))(ConnectedRouter);
