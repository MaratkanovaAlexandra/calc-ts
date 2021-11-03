import React, { FC } from 'react';
import cn from 'clsx';
import styles from './SectionHeader.module.css';

type SectionHeaderProps = {
  title: string,
  subTitle: string,
  className?: string,
}
 
const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { title, subTitle, className } = props;
  return (
    <div className={cn(styles.container, className)}>
      <p className={styles.subTitle}>
        {subTitle}
      </p>
      <h2 className={styles.title}>
        {title}
      </h2>
    </div>
  );
}
 
export default SectionHeader;
