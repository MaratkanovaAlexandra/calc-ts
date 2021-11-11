import React, { FC } from 'react';

import styles from './Welcome.module.css';

type VideoButtonProps = {
  text: string
}
 
const VideoButton: FC<VideoButtonProps> = (props) => {
  const { text } = props;
  return (
    <button className={styles.videoBtn}>
      <span className={styles.underLine}>{text}</span> ▸
    </button>
  );
}
 
export default VideoButton;
