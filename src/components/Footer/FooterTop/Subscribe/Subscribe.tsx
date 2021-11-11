import React, { FC } from 'react';
import styles from './Subscribe.module.css';

const Subscribe: FC = () => {
  return (
    <div>
      <p className={styles.columnTitle}>
        Get in touch
      </p>
      <div className={styles.intupForm}>
      <input className={styles.email} id='email' type="email" placeholder='Enter your mail' />
        <label htmlFor="email" className={styles.label} />
      </div>
    </div>
  );
}

export default Subscribe;
