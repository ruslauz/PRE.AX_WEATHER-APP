import React from 'react';

import { getLocalDate, getLocalTime } from '../../../../utils/dateFormater';
import { getSmallIcon } from '../../../../utils/getIcon';

import { Ellipsis } from '../../../Ellipsis';

import style from './style.module.css';

export const ForecastCard = ({
  data,
  timezone,
  isFirst,
  forecast,
  showSpinner }) => {
  const {
      dt,
      weather: [{ icon }],
      temp,
    } = data;
  const getDate = getLocalDate(timezone);
  const getTime = getLocalTime(timezone);
  return (
    <div className={style["forecast-card"]}>
      {
        !showSpinner 
        ? (
          <>
            <div className={style["forecast-card__title"]}>
              {
                forecast === 'daily'
                ? isFirst ? 'Завтра' : getDate(dt)
                : getTime(dt)
              }
            </div>
            <div className={style["forecast-card__icon"]}>
              <img src={getSmallIcon(icon)} alt="icon" className={style["forecast-card__img"]} />
            </div>
            <div className={style["forecast-card__text"]}>
              {
                forecast === 'daily' 
                ? (
                  <>
                    <span className={style["forecast-card__max-temp"]}>
                      <span className={style["max-temp"]}>{Math.round(temp.max)}</span>°C
                    </span>
                    <span className={style["forecast-card__min-temp"]}>
                      <span className={style["min-temp"]}>{Math.round(temp.min)}</span>°C
                    </span>
                  </>
                )
                : (
                  <span className={style["forecast-card__max-temp"]}>
                    <span className={style["max-temp"]}>{Math.round(temp)}</span>°C
                  </span>
                )
              }
            </div>
          </>
        )
        : (
          <div className={style.main__spinner}>
            <Ellipsis />
          </div>
        )
      }
    </div>
  )
};
