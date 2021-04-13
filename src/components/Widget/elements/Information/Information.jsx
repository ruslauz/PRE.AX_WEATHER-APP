import React, { useContext } from 'react';
import { StateContext } from '../../../../app/App';


import {ReactComponent as LocationIcon} from '../../../../assets/img/svg/location.svg';
import { getLocalDate } from '../../../../utils/dateFormater';

import style from './style.module.css';

export const Information = () => {
  const {
    state: {
      city,
      timezone,
      current: {
        dt: currentDate,
        temp: currentTemp,
        feels_like,
        weather: [{
          description,
        }],
      },
    }
  } = useContext(StateContext);
  const getDate = getLocalDate(timezone);

  return (
    <div className={style.widget__body}>
      <div className={style["widget-body__temp"]}>
        <span className={style["widget-temp"]}>{Math.round(currentTemp)}</span>
        <span className={style.temp__space}>&nbsp;</span>
        <span className={style.temp__symbol}>°C</span>
      </div>
      <div className={style["widget-body__text"]}>{description}</div>
      <div className={style["widget-body__feels-like"]}>Ощущается как <span className={style["feels-like-temp"]}>{Math.round(feels_like)}</span> °C</div>
      <div className={style["widget-body__date"]}>
        <div className={style.date__text}>Сегодня</div>
        <div className={style.date__info}>{getDate(currentDate)}</div>
      </div>
      <div className={style["widget-body__geo"]}>
        <div className={style.geo__icon}>
          <LocationIcon />
        </div>
        <div className={style.geo_city}>{city}</div>
      </div>
    </div>
  )
};
