import React from 'react';
import { Details } from './elements/Details';
import { Forecast } from './elements/Forecast';
import style from './style.module.css';

export const Main = () => (
  <main className={style.main}>
    <div className={style.main__container}>
      <Forecast />
      <Details />
    </div>
  </main>
);
