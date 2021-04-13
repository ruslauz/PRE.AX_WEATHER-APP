import React from 'react';

import { Ellipsis } from '../../../Ellipsis';

import style from './style.module.css';

export const DetailCard = ({ children, title, showSpinner }) => (
  <div className={style["details-card"]}>
    <div className={style["details-card__title"]}>{title}</div>
    <div className={style["details-card__body"]}>
      {children}
    </div>
    {
      showSpinner && (
        <div className={style.details__spinner}>
          <Ellipsis />
        </div>
      )
    }
  </div>
);
