import React, { FC } from 'react';
import styles from './Footer.module.css';

import Links from './Links';
import Colomn from './Colomn';
import { RESOURCES_TEXT, COMPANY_TEXT } from './colomnText';
import Subscribe from './Subscribe';

const FooterTop: FC = () => {
  return (
    <div className={styles.footerTop}>
      <Links />
      <Colomn title='Resources' textArray={RESOURCES_TEXT} />
      <Colomn title='Company' textArray={COMPANY_TEXT} />
      <Subscribe />
    </div>
  );
}
 
export default FooterTop;
