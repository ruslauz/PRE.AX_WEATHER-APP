import React from 'react';

import {ReactComponent as Arrow} from '../../../../assets/img/Button-slider/light/Vector 5.svg';

export const SliderButton = ({ className, ...rest }) => (
  <button className={className} {...rest}>
    <Arrow />
  </button>
);
