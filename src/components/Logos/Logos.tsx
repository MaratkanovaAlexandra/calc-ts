import React, { FC } from 'react';
import PageLayout from '../PageLayout';

import Chase from '../../assets/icons/chase.svg';
import Asana from '../../assets/icons/asana.svg';
import Google from '../../assets/icons/google.svg';
import Buzzfeed from '../../assets/icons/buzzfeed.svg';
import Walmart from '../../assets/icons/walmart.svg';

import styles from './Logos.module.css';

const Logos: FC = () => {
  return (
    <PageLayout>
      <div className={styles.logos}>
        <img src={Chase} alt="Chase" />
        <img src={Asana} alt="Asana" />
        <img src={Google} alt="Google" />
        <img src={Buzzfeed} alt="Buzzfeed" />
        <img src={Walmart} alt="Walmart" />
      </div>
    </PageLayout>
  );
}
 
export default Logos;
