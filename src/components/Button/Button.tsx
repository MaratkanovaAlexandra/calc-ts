import React, { FC } from 'react';
import cn from 'clsx';

import styles from './Button.module.css';

type ButtonProps = {
  text: string,
  type: 'green'|'white',
  size: 'big'|'small',
  className?: string,
}
 
const Button: FC<ButtonProps> = (props) => {
  const {text, type, size, className} = props;

  return (
    <button type='button' className={cn(styles.btn, styles[type], styles[size], className)}>
      {text}
    </button>
  );
}
 
export default Button;
