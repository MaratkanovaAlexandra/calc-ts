import React, { FC } from 'react';
import SliderButton from './SliderButton';

import styles from './SliderButton.module.css';

type SliderButtonsProps = {
  position: number,
  next: () => void,
  prev: () => void,
}
 
const SliderButtonsContainer: FC<SliderButtonsProps> = (props) => {
  const { position, next, prev } = props;

  return (
    <div className={styles.container}>
      <SliderButton disabled={position === 0} handleClick={prev} side='left' />
      <SliderButton disabled={position === 3} handleClick={next} side='right' />
    </div>
  );
}
 
export default SliderButtonsContainer;
