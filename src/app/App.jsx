import { createContext } from 'react';
import cn from 'classnames';

import style from './style.module.css';

import { Preloader } from '../components/Preloader';
import { Widget } from '../components/Widget';
import { Main } from '../components/Main';
import { useApp } from './useApp';

export const StateContext = createContext();

export const App = () =>  {
  const {
    state,
    dispatch,
    isAppReady,
  } = useApp();
  
  return (
    <StateContext.Provider value={{state, dispatch}}>
      <div className={cn(style.app)}>
        {
          isAppReady && (
            <>
              <Widget />
              <Main />
            </>
          )
        }
        <Preloader />
      </div>
    </StateContext.Provider>
  );
};
