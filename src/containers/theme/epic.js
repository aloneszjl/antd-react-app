import { combineEpics } from "redux-observable";
import querystring from "query-string";
import {
  getPrimaryColorDucks,
  getPrimaryColorEpic,
  getTheme,
  setTheme
} from "./ducks";
import { LOCATION_CHANGE } from "../../routes/ConnectedRouter";

const locationChangeEpic = (action$, store) =>
  action$
    .ofType(LOCATION_CHANGE)
    .filter(action => {
      const theme = getTheme(store.getState());
      const { mode } = querystring.parse(action.payload.search);
      if (!mode) {
        return false;
      }
      return mode !== theme.mode;
    })
    .map(action => {
      const { mode } = querystring.parse(action.payload.search);
      return getPrimaryColorDucks.requestActions.request({ mode });
    });

const getPrimaryColorSuccessEpic = action$ =>
  action$
    .ofType(getPrimaryColorDucks.requestTypes.SUCCESS)
    .map(action =>
      setTheme({ mode: action.params.mode, primary: action.payload })
    );

export default combineEpics(
  getPrimaryColorEpic,
  locationChangeEpic,
  getPrimaryColorSuccessEpic
);
