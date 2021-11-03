import React, { FC } from 'react';
import styles from './Comments.module.css';

import SliderButton from './SliderButton';

type SliderButtonsProps = {
  position: number,
  next: () => void,
  prev: () => void,
}
 
const SliderButtons: FC<SliderButtonsProps> = (props) => {
  const { position, next, prev } = props;

  return (
    <div className={styles.sliderButtons}>
      <SliderButton disabled={position === 0} handleClick={prev} side='left' />
      <SliderButton disabled={position === 3} handleClick={next} side='right' />
    </div>
  );
}
 
export default SliderButtons;
