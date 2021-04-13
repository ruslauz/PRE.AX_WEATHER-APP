export const SET_PRELOADER_TEXT = 'APP/SET_PRELOADER_TEXT';
export const SET_APP_READY = 'APP/SET_APP_READY';
export const SET_IS_FETCHING = 'APP/SET_IS_FETCHING';
export const SET_CITY = 'APP/SET_CITY';
export const SET_DATA = 'APP/SET_DATA';
export const SET_ERROR = 'APP/SET_ERROR';
export const SET_ERROR_MESSAGE = 'APP/SET_ERROR_MESSAGE';
export const SET_SEARCHING_PANEL_OPENED = 'APP/SET_SEARCHING_PANEL_OPENED';
export const SET_THEME = 'APP/SET_THEME';
export const SET_FORECAST = 'APP/SET_FORECAST';
export const SET_HISTORY = 'APP/SET_HISTORY';
export const SET_VALUE = 'APP/SET_VALUE';
export const SET_HOURLY = 'APP/SET_HOURLY';
export const SET_DAILY = 'APP/SET_DAILY';

export const setPreloaderText = text => ({
  type: SET_PRELOADER_TEXT,
  payload: text,
});

export const setAppReady = boolean => ({
  type: SET_APP_READY,
  payload: boolean,
});

export const setIsFetching = boolean => ({
  type: SET_IS_FETCHING,
  payload: boolean,
});

export const setCity = city => ({
  type: SET_CITY,
  payload: city,
});

export const setData = data => ({
  type: SET_DATA,
  payload: data,
});

export const setError = boolean => ({
  type: SET_ERROR,
  payload: boolean,
});

export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  payload: message,
});

export const setSearchingPanelOpened = boolean => ({
  type: SET_SEARCHING_PANEL_OPENED,
  payload: boolean,
});

export const setTheme = theme => ({
  type: SET_THEME,
  payload: theme,
});

export const setForecast = forecast => ({
  type: SET_FORECAST,
  payload: forecast,
});

export const setHistory = city => ({
  type: SET_HISTORY,
  payload: city,
});

export const setValue = value => ({
  type: SET_VALUE,
  payload: value,
});

export const setHourly = array => ({
  type: SET_HOURLY,
  payload: array,
});

export const setDaily = array => ({
  type: SET_DAILY,
  payload: array,
});
