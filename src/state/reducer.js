import { DAYS, DEFAULT_CITY, HOURS } from '../constants';
import {
  SET_APP_READY,
  SET_CITY,
  SET_DATA,
  SET_IS_FETCHING,
  SET_PRELOADER_TEXT,
  SET_ERROR,
  SET_SEARCHING_PANEL_OPENED, 
  SET_THEME,
  SET_ERROR_MESSAGE,
  SET_FORECAST,
  SET_HISTORY,
  SET_VALUE,
  SET_HOURLY,
  SET_DAILY, } from './actions';

export const initialState = {
  isAppReady: false,
  preloaderText: '',
  city: DEFAULT_CITY,
  current: [],
  daily: [],
  hourly: [],
  timezone: '',
  isFetching: false,
  fetchingError: false,
  fetchingErrorMessage: '',
  searchingPanelOpened: false,
  theme: 'light',
  forecast: 'daily',
  history: [],
  value: '',
  nextDayId: ''
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRELOADER_TEXT:
      return {...state, preloaderText: payload};
    case SET_APP_READY:
      return {...state, isAppReady: payload};
    case SET_IS_FETCHING:
      return {...state, isFetching: payload};
    case SET_CITY:
      return {...state, city: payload};
    case SET_DATA:
      const {current, daily, hourly, timezone} = payload;
      return {...state,
        current,
        daily: daily.slice(1, DAYS + 1),
        hourly: hourly.slice(1, HOURS + 1),
        timezone,
        nextDayId: daily[1].dt,
      };
    case SET_ERROR:
      return {...state, fetchingError: payload};
    case SET_ERROR_MESSAGE:
      return {...state,  fetchingErrorMessage: payload};
    case SET_SEARCHING_PANEL_OPENED:
      return {...state, searchingPanelOpened: payload};
    case SET_THEME:
      return {...state, theme: payload};
    case SET_FORECAST:
      return {...state, forecast: payload};
    case SET_HISTORY:
      return {...state, history: [payload, ...state.history].slice(0, 5)};
    case SET_VALUE:
      return {...state, value: payload};
    case SET_HOURLY:
      return {...state, hourly: [...payload]};
    case SET_DAILY:
      return {...state, daily: [...payload]};
    default:
      return state;
  }
}
