import React, { FC } from 'react';

import styles from './Welcome.module.css';
import Button from '../../Button';

const Welcome: FC = () => {
  return (
    <>
      <h1 className={styles.title}>
        We Develop <span className={styles.greenText}>Shopify</span> sites
      </h1>
      <p className={styles.welcomeText}>
        Slingback fabric heels. Thin wraparound ankle strap. 
        Squared heel and toe. Pointed toes. Padded insole with geometrical design. 
      </p>
      <div className={styles.btnContainer}>
        <Button children="Contact Us" type="green" size="big"/>
        <a href="." className={styles.video}>
          <span className={styles.underLine}>Watch Video</span> ▸
        </a>
        {/**/}
      </div>
    </>
  );
}
 
export default Welcome;
