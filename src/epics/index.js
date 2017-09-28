import { combineEpics } from 'redux-observable';
import auth from '../containers/auth';
import theme from '../containers/theme';

export default combineEpics(auth.epic, theme.epic);
