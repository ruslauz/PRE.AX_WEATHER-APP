import React, { useContext } from 'react';

import { StateContext } from '../../../../app/App';

import { getMmhg } from '../../../../utils/getMmhg';

import { DetailCard } from '../DetailCard';
import { Humidity } from '../Humidity/Humidity';
import { WindDirection } from '../WindDirection';

import style from './style.module.css';

export const Details = () => {
  const {
    state: {
      current: {
        wind_speed,
        wind_deg,
        humidity,
        visibility,
        pressure,
      },
      isFetching,
    }
  } = useContext(StateContext);

  return (
    <div className={style.main__details}>
      <header className={style["main-details__header"]}>
        Подробно на сегодня
      </header>
      <div className={style["main-details__cards"]}>
        <DetailCard showSpinner={isFetching} title='Скорость ветра'>
          <div className={style["detail-card__text"]}>
            <span className={style["details-card__text"]}>{wind_speed}</span>&nbsp;
            <span className={style["details-card__body_smaller"]}>м/с</span>
          </div>
          <WindDirection wind_deg={wind_deg}/>
        </DetailCard>
        <DetailCard showSpinner={isFetching} title='Влажность'>
          <div className={style["detail-card__text"]}>
            <span className={style["details-card__text"]}>{humidity}</span>&nbsp;
            <span className={style["details-card__body_smaller"]}>%</span>
          </div>
          <Humidity value={humidity}/>
        </DetailCard>
        <DetailCard showSpinner={isFetching} title='Видимость'>
          <div className={style["detail-card__text"]}>
            <span className={style["details-card__text"]}>{(visibility/1000).toFixed(1)}</span>&nbsp;
            <span className={style["details-card__body_smaller"]}>км</span>
          </div>
        </DetailCard>
        <DetailCard showSpinner={isFetching} title='Давление'>
          <div className={style["detail-card__text"]}>
            <span className={style["details-card__text"]}>{Math.round(getMmhg(pressure))}</span>&nbsp;
            <span className={style["details-card__body_smallest"]}>мм рт. ст.</span>
          </div>
        </DetailCard>
      </div>
    </div>
  )
};