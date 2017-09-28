import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';
import createActionBuffer from 'redux-action-buffer';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './ducks';
import rootEpic from './epics';
import { configureApi } from './utils/api';
import history from './routes/history';

// const initialState = window.__INITIAL_STATE__ || {};
// delete window.__INITIAL_STATE__;

const epicMiddleware = createEpicMiddleware(rootEpic);

const historyMiddleware = routerMiddleware(history);

let middleware = [epicMiddleware, createActionBuffer(REHYDRATE)];
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  middleware = [...middleware, createLogger()];
}

export default function configureStore() {
  const enhancer = compose(
    autoRehydrate(),
    applyMiddleware(...middleware, historyMiddleware),
  );
  const store = createStore(rootReducer, {}, enhancer);

  configureApi(store);

  if (module.hot) {
    // hot reload epics
    module.hot.accept('./epics', () => {
      const nextRootEpic = require('./epics').default;

      epicMiddleware.replaceEpic(nextRootEpic);
    });

    // hot reload reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./ducks').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
