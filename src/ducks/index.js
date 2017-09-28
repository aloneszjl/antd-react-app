import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import auth from '../containers/auth';
import theme from '../containers/theme';

const appReducer = combineReducers({
  form: formReducer,
  [auth.ducks.NAME]: auth.reducer,
  [theme.ducks.NAME]: theme.reducer,
  router: routerReducer,
});

export default (state, action) =>
  //   if (action.type === auth.ducks.LOGOUT) {
  //     state = undefined;
  //   }
  appReducer(state, action)
;
