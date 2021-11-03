import React, { FC } from 'react';
import PageLayout from '../PageLayout';
import SectionHeader from '../SectionHeader';
import SpecializationContainer from './SpecializationContainer';
import Button from '../Button';

import styles from './Specialization.module.css';

const Specialization: FC = () => {
  return (
    <div className={styles.container}>
      <PageLayout className={styles.center}>
        <SectionHeader subTitle="What we Do?" title="Our Specialization"/>
        <SpecializationContainer />
        <Button text="Learn More" type="grean" size="big" />
      </PageLayout>
    </div>
  );
}
 
export default Specialization;
