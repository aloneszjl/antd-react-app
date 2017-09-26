import React, { Component } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import Routes from "./routes";
import configureStore from "./configureStore";
import { NAME as AUTH_NAME } from "./containers/auth/ducks";
import history from "./routes/history";
import ConnectedRouter from "./routes/ConnectedRouter";

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
        whitelist: [AUTH_NAME]
      },
      () => {
        this.setState({ rehydrated: true });
      }
    );
  }

  render() {
    if (!this.state.rehydrated) {
      return <div>loading...</div>;
    }
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <div>
              <Routes />
            </div>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
