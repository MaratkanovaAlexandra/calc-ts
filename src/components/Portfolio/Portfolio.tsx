import React, { FC } from 'react';
import styles from './Portfolio.module.css';

import PageLayout from '../PageLayout';
import SectionHeader from '../SectionHeader';
import ExampleContainer from './ExampleContainer';
import Button from '../Button';
 
const Portfolio: FC = () => {
  return (
    <div className={styles.container}>
      <PageLayout className={styles.center}>
        <SectionHeader title="Our Portfolio" subTitle="Our Work" />
        <ExampleContainer />
        <Button text="All Projects" type="grean" size="big" />
      </PageLayout>
    </div>
  );
}
 
export default Portfolio;
