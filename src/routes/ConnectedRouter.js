import React, { Component } from 'react';
import { Router } from 'react-router-dom';

export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

type Props = {
  store: Object,
  history: Object,
};

class ConnectedRouter extends Component {
  props: Props;

  handleLocationChange = location => {
    const { store } = this.props;
    store.dispatch({
      type: LOCATION_CHANGE,
      payload: location,
    });
  };

  componentWillMount() {
    const { history } = this.props;
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
    return <Router {...this.props} />;
  }
}

export default ConnectedRouter;
