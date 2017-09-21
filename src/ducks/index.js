import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import auth from "../containers/auth";

const appReducer = combineReducers({
  form: formReducer,
  [auth.ducks.NAME]: auth.reducer,
  router: routerReducer
});

export default (state, action) => {
  //   if (action.type === auth.ducks.LOGOUT) {
  //     state = undefined;
  //   }
  return appReducer(state, action);
};
