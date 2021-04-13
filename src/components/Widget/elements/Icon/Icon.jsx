import React, { useContext } from 'react';

import { StateContext } from '../../../../app/App';

import { getLargeIcon } from '../../../../utils/getIcon';

import style from './style.module.css';

export const Icon = ({ iconId }) => {
  const {state} = useContext(StateContext);
  const icon = getLargeIcon(state.current.weather[0].icon); // current.weather[0].icon
  return (
    <div className={style.widget__icon}>
      <img
        src={icon}
        alt="widget-icon"
        className={style["widget-icon__img"]} />
    </div>
  )
};
