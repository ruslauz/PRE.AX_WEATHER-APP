import { useEffect, useLayoutEffect, useReducer } from 'react';

import { getCoordinates, getWeather } from '../api';
import { getTheme } from '../utils/getTheme';
import { toggleTheme } from '../utils/toggleTheme';
import { dictionary } from '../dictionary';

import { setAppReady, setData, setPreloaderText, setTheme } from '../state/actions';
import { appReducer, initialState } from '../state/reducer';


export const useApp = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const {
    isAppReady,
  } = state;

  useEffect(() => {
    const init = async() => {
      try {
        dispatch(setPreloaderText(dictionary.preloaderText.loading));
        const coords = await getCoordinates();
        const data = await getWeather(coords);
        dispatch(setData(data));
        dispatch(setAppReady(true));
      } catch (error) {
        dispatch(setPreloaderText(dictionary.preloaderText.error));
      }
    }
    init();
  }, []);

  useLayoutEffect(() => {
    const theme = getTheme();
    if (theme) {
      dispatch(setTheme(theme));
      toggleTheme(theme);
    }
  }, [])

  return {
    state,
    dispatch,
    isAppReady,
  }
}
