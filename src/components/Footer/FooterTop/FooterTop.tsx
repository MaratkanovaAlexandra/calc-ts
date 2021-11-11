import React, { FC } from 'react';

import Links from './Links';
import Colomn from './Column';
import Subscribe from './Subscribe/Subscribe';

import styles from './FooterTop.module.css';

const FooterTop: FC = () => {
  return (
    <div className={styles.footerTop}>
      <Links />
      <Colomn title='Resources' text='resources' />
      <Colomn title='Company' text='company' />
      <Subscribe />
    </div>
  );
}

export default FooterTop;
