import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import Routes from './routes';
import configureStore from './configureStore';
import { NAME as AUTH_NAME } from './containers/auth/ducks';
import history from './routes/history';
import ConnectedTheme from './routes/ConnectedTheme';

const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false };
  }

  componentDidMount() {
    persistStore(
      store,
      {
        whitelist: [AUTH_NAME],
      },
      () => {
        this.setState({ rehydrated: true });
      },
    );
  }

  render() {
    if (!this.state.rehydrated) {
      return <div>loading...</div>;
    }
    return (
      <Provider store={store}>
        <ConnectedTheme store={store} history={history}>
          <div>
            <Routes />
          </div>
        </ConnectedTheme>
      </Provider>
    );
  }
}

export default App;
