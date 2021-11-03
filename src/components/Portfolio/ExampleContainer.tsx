import React, { FC } from 'react';
import styles from './Portfolio.module.css';

import Example from './Example';
 
const ExampleContainer: FC = () => {
  return (
    <div className={styles.exampleContainer}>
      <div className={styles.leftColomn}>
        <Example img='fachion.jpg' text='Fashion Landing page' />
        <Example img='furniture.jpg' text='Furniture Shop' />
      </div>
      <div className={styles.rightColomn}>
        <Example img='fitness.jpg' text='Health & Fitness' />
        <Example img='it.jpg' text='IT Solution Provider' />
      </div>
    </div>
  );
}
 
export default ExampleContainer;
