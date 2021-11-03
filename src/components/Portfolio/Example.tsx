import React, { FC } from 'react';
import styles from './Portfolio.module.css';

type ExampleProps = {
  img : string,
  text: string
}
 
const Example: FC<ExampleProps> = (props) => {
  const { img, text } = props;

  return (
    <div className={styles.example}>
      <img src={require(`../../assets/images/${img}`).default} alt={img.split('.')[0]} />
      <div className={styles.oneLineText}>
        <h3 className={styles.exampleText}>
          {text}
        </h3>
        <a href='.' className={styles.exampleLink}>
          View Details
        </a>
      </div>
    </div>
  );
}
 
export default Example;
