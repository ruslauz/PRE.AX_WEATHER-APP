import React, { useContext } from 'react';
import cn from 'classnames';

import { StateContext } from '../../../../app/App';

import { setSearchingPanelOpened } from '../../../../state/actions';

import { Button } from '../../../Button';
import { Toggle } from '../../../Toggle';

import style from './style.module.css';

export const Header = () => {
  const {
    dispatch,
  } = useContext(StateContext);

  const onOpen = () => dispatch(setSearchingPanelOpened(true));
  return (
    <header className={style.widget__header}>
      <Button
        title='Поиск города'
        className={cn(style.button, style["widget__serching-open"])}
        onClick={onOpen}/>
      <Toggle />
    </header>
  )
};
