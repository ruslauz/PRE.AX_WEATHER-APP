import React, { useContext, useState } from 'react';
import cn from 'classnames';

import { SliderButton } from '../SliderButton';
import { ForecastCard } from '../ForecastCard';

import style from './style.module.css';
import { StateContext } from '../../../../app/App';
import { setDaily, setHourly } from '../../../../state/actions';

export const ForecastPanel = () => {
  const {
    state: {
      timezone,
      nextDayId,
      daily,
      hourly,
      forecast,
      isFetching,
    },
    dispatch,
  } = useContext(StateContext);

  const [leftDisabled, setLeftDisabled] = useState(false);
  const [rightDisabled, setRightDisabled] = useState(true);

  const cards = forecast === 'daily' ? daily : hourly;
  const setCards = forecast === 'daily' ? setDaily : setHourly;

  const onSlideLeft = () => {
    setRightDisabled(false);
    dispatch(setCards([...cards.slice(1).concat(cards[0])]));
  }

  const onSlideRight = () => {
    setLeftDisabled(false);
    dispatch(setCards([cards[cards.length - 1],  ...cards.slice(0, -1)]));
  };

  return (
    <div className={style.forecast__panel}>
      <div className={style.forecast__body}>
        <div className={style["forecast-body__cards"]}>
          {
            cards.map((card) => {
              return (
                <ForecastCard
                  key={card.dt}               
                  forecast={forecast}
                  data={card}
                  timezone={timezone}
                  isFirst={card.dt === nextDayId}
                  showSpinner={isFetching} />
              )
            })
          }
        </div>
      </div>
      <SliderButton
        className={cn(style["forecast-button"], style["forecast-button_reversed"], leftDisabled && style["forecast-button_disabled"])}
        onClick={onSlideLeft} />
      <SliderButton
        className={cn(style["forecast-button"], rightDisabled && style["forecast-button_disabled"])}
        onClick={onSlideRight} />
    </div>
  )
};
