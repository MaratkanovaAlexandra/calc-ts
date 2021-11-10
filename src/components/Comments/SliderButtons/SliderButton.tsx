import React, { FC } from 'react';

import styles from './SliderButton.module.css';
import cn from 'clsx';

const MAPPED_SIDE_TO_STYLES = {
  'right': styles.right,
  'left': styles.left,
}

type SliderButtonProps = {
  disabled: boolean,
  handleClick: () => void,
  side: 'right'|'left'
}

const getStyle = (disabled: boolean) => !disabled ? styles.black : styles.white;
 
const SliderButton: FC<SliderButtonProps> = (props) => {
  const { disabled, side, handleClick } = props;

  return (
    <button className={cn(styles.sliderBtn, MAPPED_SIDE_TO_STYLES[side], getStyle(disabled))} onClick={handleClick} />
  );
}
 
export default SliderButton;
