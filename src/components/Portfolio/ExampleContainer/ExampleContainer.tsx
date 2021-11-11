import React, { FC } from 'react';

import Example from '../Example';

import Fachion from '../../../assets/images/fachion.jpg';
import Furniture from '../../../assets/images/furniture.jpg';
import Fitness from '../../../assets/images/fitness.jpg';
import It from '../../../assets/images/it.jpg';

import styles from './ExampleContainer.module.css';

const ExampleContainer: FC = () => {
  return (
    <div className={styles.exampleContainer}>
      <div className={styles.leftColomn}>
        <Example img={Fachion} alt='fachion' text='Fashion Landing page' />
        <Example img={Furniture} alt='furniture' text='Furniture Shop' />
      </div>
      <div className={styles.rightColomn}>
        <Example img={Fitness} alt='fitness' text='Health & Fitness' />
        <Example img={It} alt='it' text='IT Solution Provider' />
      </div>
    </div>
  );
}
 
export default ExampleContainer;
