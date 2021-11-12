import React, { FC } from 'react';
import cn from 'clsx';

import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode | React.ReactNode[],
  type: 'green'|'white',
  size: 'big'|'small',
  className?: string,
}

const MAPPED_TYPE_TO_STYLES = {
  'green': styles.green,
  'white': styles.white
}

const MAPPED_SIZE_TO_STYLES = {
  'big': styles.big,
  'small': styles.small,
}
 
const Button: FC<ButtonProps> = (props) => {
  const {children, type, size, className} = props;

  return (
    <button type='button' className={cn(styles.btn, MAPPED_TYPE_TO_STYLES[type], MAPPED_SIZE_TO_STYLES[size], className)}>
      {children}
    </button>
  );
}
 
export default Button;
