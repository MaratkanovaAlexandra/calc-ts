import React, { FC } from 'react';
import styles from './Footer.module.css';
import cn from 'clsx'

type LinkBtnProps = {
  icon: string
}
 
const LinkBtn: FC<LinkBtnProps> = (props) => {
  const { icon } = props;
  return (
    <button className={cn(styles.linkBtn, styles[icon])} />
  )
}
 
export default LinkBtn;
