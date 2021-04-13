import React from 'react';

import {ReactComponent as CompassIcon} from '../../../../assets/img/svg/compass.svg';

import { getDirection } from '../../../../utils/getDirection';

import style from './style.module.css';

export const WindDirection = ({ wind_deg }) => (
  <div className={style["details-card__footer"]}>
    <div className={style["details-footer__icon"]} style={{ transform: `rotate(${wind_deg}deg)` }}>
      <CompassIcon />
    </div>
    <div className={style["details-footer__text"]}>{getDirection(wind_deg)}</div>
  </div>
);
