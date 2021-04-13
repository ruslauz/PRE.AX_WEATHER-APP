import React, { useContext } from 'react';

import { StateContext } from '../../../../app/App';

import { setValue } from '../../../../state/actions';

import style from './style.module.css';

export const History = () => {
  const {
    state: {
      history,
    },
    dispatch,
  } = useContext(StateContext);
  const onCLick = city => () => {
    dispatch(setValue(city));
  }
  return (
    <div className={style.historyList}>
      {
        history.map((city, idx) => (
          <button className={style.historyButton} type="submit" onClick={onCLick(city)} key={idx}>
            <span className={style.historyButtonText}>{city}</span>
            <i className="fas fa-chevron-right"></i>
          </button>
        ))
      }
    </div>
  )
};
