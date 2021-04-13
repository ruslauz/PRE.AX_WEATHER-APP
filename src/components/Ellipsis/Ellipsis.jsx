import React from 'react';
import style from './style.module.css';

export const Ellipsis = () => {
  return (
    <div className={style["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};
