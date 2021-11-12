import React, { FC } from 'react';
import PageLayout from '../PageLayout';
import SectionHeader from '../SectionHeader';
import SpecializationContainer from './SpecializationContainer/SpecializationContainer';
import Button from '../Button';

import styles from './Specialization.module.css';

const Specialization: FC = () => {
  return (
    <div className={styles.container}>
      <PageLayout className={styles.center}>
        <SectionHeader subTitle="What we Do?" title="Our Specialization"/>
        <SpecializationContainer />
        <Button children="Learn More" type="green" size="big" />
      </PageLayout>
    </div>
  );
}
 
export default Specialization;
