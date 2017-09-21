import { combineEpics } from "redux-observable";
import { accountEpic } from "./ducks";

export default combineEpics(accountEpic);
