import React, { FC } from 'react';
import cn from 'clsx';
import styles from './SpecializationBox.module.css';

type SpecializationBoxProps = {
  logo: string,
  alt: string,
  title: string,
  text: string,
}
 
const SpecializationBox: FC<SpecializationBoxProps> = (props) => {
  const { logo, title, text, alt } = props;
  
  return (
    <div className={styles.box}>
      <div className={styles.boxHead}>
        <img src={logo} alt={alt} />
        <h4 className={styles.boxHeadText}>
          {title}
        </h4>
      </div>
      <p className={styles.boxText}>
        {text}
      </p>
      <a href="." className={cn(styles.boxText, styles.boxLink)}>Read More</a>
    </div>
  );
}
 
export default SpecializationBox;
