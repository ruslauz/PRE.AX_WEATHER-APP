import { useContext } from 'react';

import { getCoordinates, getWeather } from '../../../../api';

import { StateContext } from '../../../../app/App';

import { setCity,
  setData,
  setError,
  setErrorMessage,
  setHistory,
  setIsFetching,
  setSearchingPanelOpened,
  setValue } from '../../../../state/actions';

export const useSearchingPanel = () => {
  const {
    state: {
      value,
      searchingPanelOpened,
      isFetching,
      fetchingError,
      fetchingErrorMessage,
    },
    dispatch,
  } = useContext(StateContext);

  const onClose = () => dispatch(setSearchingPanelOpened(false));
  const onChange = e => {
    const value = e.target.value;
    dispatch(setValue(value.trimStart()));
  }
  const onSubmit = async e => {
    e.preventDefault();
    if (value.length) {
      try {
        dispatch(setError(false));
        dispatch(setIsFetching(true));
        const coords = await getCoordinates(value);
        const location = coords.city || coords.state || coords.country || coords.place;
        dispatch(setCity(location));
        const data = await getWeather(coords);
        dispatch(setData(data));
        dispatch(setHistory(location));
        dispatch(setSearchingPanelOpened(false));
      } catch (error) {
        dispatch(setError(true));
        dispatch(setErrorMessage(error.message));
      } finally {
        dispatch(setIsFetching(false));
      }
    }
  }

  return {
    value,
    searchingPanelOpened,
    isFetching,
    fetchingError,
    fetchingErrorMessage,
    onClose,
    onChange,
    onSubmit,
  }
}
