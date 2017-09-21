import { combineReducers } from "redux";
import { createAction, createRequestEpicDucks } from "redux-observable-utils";
import * as api from "./api";

export const NAME = "AUTH";

export const SET_TOKEN = `${NAME}/SET_TOKEN`;
export const REMOVE_TOKEN = `${NAME}/REMOVE_TOKEN`;
export const setToken = (token: Object) => createAction(SET_TOKEN, { token });
export const removeToken = () => createAction(REMOVE_TOKEN);

const token = (state = null, action) => {
  switch (action.type) {
    case REMOVE_TOKEN:
      return null;
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};

export const { ducks: account, epic: accountEpic } = createRequestEpicDucks({
  moduleName: NAME,
  reducerName: "ACCOUNT",
  api: api.getSelectedAccount,
  options: {
    cache: false
  }
});

export default combineReducers({
  token,
  [account.reducerName]: account.reducer
});
