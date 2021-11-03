import React, { FC } from 'react';

import styles from './ContactUs.module.css';
import PageLayout from '../PageLayout';
import SectionHeader from '../SectionHeader';
import Button from '../Button';

const ContactUs: FC = () => {
  return (
    <div className={styles.container}>
      <PageLayout className={styles.center}>
        <SectionHeader title='Need a little more home to grow?' subTitle='' className={styles.headerWidth} />
        <Button text="Contact Us" type='grean' size='big' className={styles.btnPosition} />
      </PageLayout>
    </div>
  );
}
 
export default ContactUs;
