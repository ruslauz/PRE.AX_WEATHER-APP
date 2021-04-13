import React, { useContext } from 'react';
import cn from 'classnames';

import style from './style.module.css';

import { StateContext } from '../../app/App';

export const Preloader = () => {
  const {state: {
    preloaderText,
    isAppReady,
  }} = useContext(StateContext);
  return (
    <div className={cn(style.preloader, isAppReady && style.preloader_hidden )}>
      <div className={style['lds-dual-ring']}></div>
      <div className={style.preloader__text}>
        {preloaderText}
      </div>
    </div>
  )
};
