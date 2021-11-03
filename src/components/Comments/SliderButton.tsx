import React, { FC } from 'react';

import styles from './Comments.module.css';
import cn from 'clsx';

type SliderButtonProps = {
  disabled: boolean,
  handleClick: () => void,
  side: 'right'|'left'
}
 
const SliderButton: FC<SliderButtonProps> = (props) => {
  const { disabled, side, handleClick } = props;

  const getStyle = (disabled: boolean) => !disabled ? styles.black : styles.white;

  return (
    <button className={cn(styles.sliderBtn, styles[side], getStyle(disabled))} onClick={handleClick} />
  );
}
 
export default SliderButton;
