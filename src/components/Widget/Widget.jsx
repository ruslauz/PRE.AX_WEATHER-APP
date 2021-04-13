import React from 'react';

import { BackGround } from './elements/BackGround/BackGround';
import { Header } from './elements/Header';
import { Icon } from './elements/Icon';
import { Information } from './elements/Information/Information';
import { SearchingPanel } from './elements/SearchingPanel/SearchingPanel';

import style from './style.module.css';

export const Widget = () => (
  <div className={style.widget}>
    <Header />
    <Icon />
    <BackGround />
    <Information />
    <SearchingPanel />
  </div>
);
