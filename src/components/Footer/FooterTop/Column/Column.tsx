import React, { FC } from 'react';

import TEXT from './colomnText';

import styles from './Column.module.css';

type ColomnProps = {
  title: string,
  text: 'resources'| 'company',
}

const getText = (text: string):string[] => text === 'resources'? TEXT.RESOURCES : TEXT.COMPANY;
 
const Column: FC<ColomnProps> = (props) => {
  const { title, text } = props;

  return (
    <ul className={styles.column}>
      <li className={styles.columnTitle}>{title}</li>
      {getText(text).map(text => <a href='.' className={styles.columnText} key={text}>{text}</a>)}
    </ul>
  );
}
 
export default Column;
