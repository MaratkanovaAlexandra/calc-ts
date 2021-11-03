import React, { FC } from 'react';
import SpecializationBox from './SpecializationBox';
import { WEBFLOW_TITLE, WEBFLOW_TEXT, SHOPIFY_TITLE, SHOPIFY_TEXT, FIGMA_TITLE, FIGMA_TEXT, PHP_TITLE, PHP_TEXT } from './texts';

import styles from './Specialization.module.css';
 
const SpecializationContainer: FC = () => {
  return (
    <div className={styles.specializationContainer}>
      <SpecializationBox title={WEBFLOW_TITLE} text={WEBFLOW_TEXT} logo='webflow.svg' />
      <SpecializationBox title={SHOPIFY_TITLE} text={SHOPIFY_TEXT} logo='shopify.svg' />
      <SpecializationBox title={FIGMA_TITLE} text={FIGMA_TEXT} logo='figma.svg' />
      <SpecializationBox title={PHP_TITLE} text={PHP_TEXT} logo='php.svg' />
    </div> 
  );
}
 
export default SpecializationContainer;
