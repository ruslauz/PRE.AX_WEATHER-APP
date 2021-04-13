import React from 'react';

import style from './style.module.css';

export const Humidity = ({ value }) => (
  <div className={style.humidity} >
    <div className={style.percents}>
      <span className={style.percent}>0</span>
      <span className={style.percent}>50</span>
      <span className={style.percent}>100</span>
    </div>
    <progress max="100" value={value} className={style.progress} />
    <div className={style.percentSymbol}>
      <span>%</span>
    </div>
  </div>
);
