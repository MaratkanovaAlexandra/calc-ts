import React, { FC } from 'react';
import styles from './Footer.module.css';
import cn from 'clsx';

type ColomnProps = {
  title: string,
  textArray: string[]
}
 
const Colomn: FC<ColomnProps> = (props) => {
  const { title, textArray } = props;

  return (
    <ul className={styles.colomn}>
      <li className={styles.colomnTitle}>{title}</li>
      {textArray.map(text => <a href='.' className={cn(styles.footerText, styles.li )} key={text}>{text}</a>)}
    </ul>
  );
}
 
export default Colomn;
