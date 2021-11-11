import React, { FC } from 'react';
import styles from './FooterBottom.module.css';
import cn from 'clsx'
 
const FooterBottom: FC = () => {
  return (
    <div className={styles.footerBottom}>
      <p className={cn(styles.footerText, styles.bottomText)}>Copyright 2021 ©Web.Dev  All rights reserved.</p>
    </div>
  );
}
 
export default FooterBottom;
