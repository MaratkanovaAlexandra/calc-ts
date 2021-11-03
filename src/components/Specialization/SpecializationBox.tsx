import React, { FC } from 'react';
import styles from './Specialization.module.css';
import cn from 'clsx';

type SpecializationBoxProps = {
  logo: string,
  title: string,
  text: string,
}
 
const SpecializationBox: FC<SpecializationBoxProps> = (props) => {
  const { logo, title, text } = props;

  return (
    <div className={styles.box}>
      <div className={styles.boxHead}>
        <img src={require(`../../assets/icons/${logo}`).default} alt={logo.split('.')[0]} />
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
