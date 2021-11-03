import React, { FC } from 'react';
import cn from 'clsx';

import styles from './Logos.module.css';

import PageLayout from '../PageLayout';

const Logos: FC = () => {
  return (
    <PageLayout>
      <div className={styles.logos}>
        <div className={cn(styles.logo, styles.chase)} />
        <div className={cn(styles.logo, styles.asana)} />
        <div className={cn(styles.logo, styles.google)} />
        <div className={cn(styles.logo, styles.buzzfeed)} />
        <div className={cn(styles.logo, styles.walmart)} />
      </div>
    </PageLayout>
  );
}
 
export default Logos;
