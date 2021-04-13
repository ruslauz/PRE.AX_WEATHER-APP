import React, { useContext } from 'react';

import style from './style.module.css';

import { StateContext } from '../../app/App';

import { toggleTheme } from '../../utils/toggleTheme';
import { setTheme } from '../../state/actions';

export const Toggle = () => {
  const {
    state: {
      theme
    },
    dispatch,
  } = useContext(StateContext);

  const onChange = e => {
    const theme = e.target.checked ? 'dark' : 'light'
    dispatch(setTheme(theme));
    toggleTheme(theme);
  }

  return (
    <label className={style.toggle__label}>
      <input
        type="checkbox"
        className={style.toggle__input}
        checked={theme === 'dark'}
        onChange={onChange}/>
    </label>
  )
};
