import { combineEpics } from "redux-observable";
import auth from "../containers/auth";

export default combineEpics(auth.epic);
