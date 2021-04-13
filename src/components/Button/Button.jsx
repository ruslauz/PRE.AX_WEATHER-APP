import React from 'react';
import cn from 'classnames';

import style from './style.module.css';

export const Button = ({ title, className, children, ...rest  }) => {
  return (
    <button className={cn(style.button, className)} {...rest}>
      {title}
      {children}
    </button>
  )
};
