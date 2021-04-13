import React, { useContext } from 'react';

import { TabRadio } from '../TabRadio';
import { ForecastPanel } from '../ForecastPanel/ForecastPanel';

import style from './style.module.css';

import { StateContext } from '../../../../app/App';

import { setForecast } from '../../../../state/actions';

export const Forecast = () => {
  const {
    state: {
    forecast,
    },
    dispatch,
  } = useContext(StateContext);

  const onChange = e => {
    dispatch(setForecast(e.target.value));
  }

  return (
    <div className={style.main__forecast}>
      <div className={style.forecast__header}>
        <header className={style["forecast-header__title"]}>
          Прогноз
        </header>
        <div className={style["forecast-header__radios"]}>
          <TabRadio labelText='на неделю' value='daily' checked={forecast === 'daily'} onChange={onChange}/>
          <TabRadio labelText='почасовой' value='hourly'  onChange={onChange}/>
        </div>              
      </div>
      <ForecastPanel />
    </div>
  )
};
