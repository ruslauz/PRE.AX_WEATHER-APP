import React from 'react';
import cn from 'classnames';

import { Button } from '../../../Button';
import {ReactComponent as CloseIcon} from '../../../../assets/img/side-bar-search/Vector.svg';
import { Ellipsis } from '../../../Ellipsis';
import { History } from '../History';

import style from './style.module.css';

import { useSearchingPanel } from './useSearchingPanel';

export const SearchingPanel = () => {
  const {
    value,
    searchingPanelOpened,
    isFetching,
    fetchingError,
    fetchingErrorMessage,
    onClose,
    onChange,
    onSubmit,
  } = useSearchingPanel();

  return (
    <div className={cn(style.widget__searching, searchingPanelOpened && style.opened)}>
      <Button
        className={style.searching__close}
        onClick={onClose}>
          <CloseIcon />
      </Button>
      <form className={style.searching__form} onSubmit={onSubmit}>
        <input
          type="search"
          className={style["searching-form__input"]}
          placeholder="Поиск" name="searching-input"
          autoComplete="off" 
          value={value}
          onChange={onChange}/>
        <Button
          className={cn(style.button, style["search-form__button"])}
          type="submit"
          title='Найти'/>
        <div className={style["search-form__info"]}>
          {isFetching && <Ellipsis />}
          {
            fetchingError && (
              <div className={style["search-form__error"]}>
                {fetchingErrorMessage}
              </div>
            )
          }
        </div>
        <History />
      </form>
    </div>
  )
};
