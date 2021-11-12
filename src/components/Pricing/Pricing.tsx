import React, { FC } from 'react';
import styles from './Pricing.module.css';

import PageLayout from '../PageLayout';
import SectionHeader from '../SectionHeader';
import Tariffs from './Tariffs/Tariffs';
 
const Pricing: FC = () => {
  return (  
    <div className={styles.container}>
      <PageLayout>
        <SectionHeader title="Pricing Policy" subTitle="Pricing" />
        <Tariffs />
      </PageLayout>
    </div>
  );
}
 
export default Pricing;
