import React, { FC } from 'react';
import styles from './Example.module.css';

type ExampleProps = {
  img : string,
  text: string,
  alt: string
}
 
const Example: FC<ExampleProps> = (props) => {
  const { img, alt, text } = props;

  return (
    <div className={styles.example}>
      <img src={img} alt={alt} />
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
