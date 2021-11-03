import React, { FC } from 'react';
import styles from './Footer.module.css';
import LinkBtn from './LinkBtn';

const Links: FC = () => {
  return (
    <div className={styles.links}>
      <h2 className={styles.footerLogo}>
        Web.Dev
      </h2>
      <p className={styles.footerText}>
        You’ll find your next home loan valu you prefer.
      </p>
      <div>
        <LinkBtn icon='facebook' />
        <LinkBtn icon='twitter' />
        <LinkBtn icon='linkedin' />
      </div>
    </div>
  );
}
 
export default Links;
