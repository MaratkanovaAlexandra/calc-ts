import React, { FC } from 'react';
import SpecializationBox from '../SpecializationBox/SpecializationBox';

import Werflow from '../../../assets/icons/webflow.svg';
import Shopify from '../../../assets/icons/shopify.svg';
import Figma from '../../../assets/icons/figma.svg';
import Php from '../../../assets/icons/php.svg';
import Text from './texts';

import styles from './SpecializationContainer.module.css';
 
const SpecializationContainer: FC = () => {
  return (
    <div className={styles.container}>
      <SpecializationBox title={Text.WEBFLOW.TITLE} text={Text.WEBFLOW.TEXT} logo={Werflow} alt='webflow icon' />
      <SpecializationBox title={Text.SHOPIFY.TITLE} text={Text.SHOPIFY.TEXT} logo={Shopify} alt='shopify icon' />
      <SpecializationBox title={Text.FIGMA.TITLE} text={Text.FIGMA.TEXT} logo={Figma} alt='figma icon' />
      <SpecializationBox title={Text.PHP.TITLE} text={Text.PHP.TEXT} logo={Php} alt='php icon' />
    </div> 
  );
}
 
export default SpecializationContainer;
