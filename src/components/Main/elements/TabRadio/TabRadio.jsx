import React from 'react';
import cn from 'classnames';

import style from './style.module.css';

export const TabRadio = ({
  labelText,
  checked,
  value,
  onChange }) => (
  <label className={style["forecast-radio__label"]}>
    <input
      type="radio"
      name="forecast-type"
      className={style["forecast-radio__input"]}
      checked={checked}
      value={value}
      onChange={onChange}/>
    <span className={cn(style["forecast-radio__text"], style["forecast-radio__text_active"])}>
      {labelText}
    </span>
  </label>
);
