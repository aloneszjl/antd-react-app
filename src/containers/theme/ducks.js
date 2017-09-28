import { combineReducers } from 'redux';
import { createAction, createRequestEpicDucks } from 'redux-observable-utils';
import get from 'lodash/get';
import initialTheme from './style';
import * as api from './api';

export const NAME = 'THEME';

export const SET_THEME = `${NAME}/SET_THEME`;
export const setTheme = params => createAction(SET_THEME, { params });

export const RESET_THEME = `${NAME}/RESET_THEME`;
export const resetTheme = params => createAction(RESET_THEME, { params });

const theme = (state = initialTheme, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        ...action.params,
      };
    case RESET_THEME:
      return initialTheme;
    default:
      return state;
  }
};

export const {
  ducks: getPrimaryColorDucks,
  epic: getPrimaryColorEpic,
} = createRequestEpicDucks({
  moduleName: NAME,
  reducerName: 'THEME',
  api: api.getPrimaryColorByMode,
});

export const getTheme = state => get(state, `${NAME}.theme`);

export default combineReducers({
  theme,
});
