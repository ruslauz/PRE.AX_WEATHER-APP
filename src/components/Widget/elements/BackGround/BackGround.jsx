import React from 'react';

import style from './style.module.css';

import Clouds from '../../../../assets/img/Cloud-background 1.png';

export const BackGround = () => (
  <div className={style.widget__background}>
    <img
      src={Clouds}
      alt="background"
      className={style["widget-background__img"]} />
  </div>
);
