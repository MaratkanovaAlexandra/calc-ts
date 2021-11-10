import React, { FC } from 'react';

import PageLayout from '../PageLayout';
import SectionHeader from '../SectionHeader';
import Slider from './Slider';

import styles from './Comments.module.css';
 
const Comments: FC = () => {
  return (
    <div className={styles.container}>
      <PageLayout>
        <SectionHeader title="What Customers Say" subTitle="Testimonials" />
        <Slider />
      </PageLayout>
    </div>
  );
}
 
export default Comments;
