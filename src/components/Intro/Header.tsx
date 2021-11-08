import React, { FC } from 'react';

import styles from './Intro.module.css';
import Button from '../Button';

const Header: FC = () => {
  return ( 
    <header className={styles.header}>
      <div className={styles.logo}>Web.Dev</div>
      <nav className={styles.nav}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>About</li>
        <li className={styles.navItem}>Testimonials</li>
        <li className={styles.navItem}>Contact</li>
        <li className={styles.navItem}>Sign in</li>
      </nav>
      <Button text="Sign up" type="green" size="small"/>
    </header>
  );
}
 
export default Header;
