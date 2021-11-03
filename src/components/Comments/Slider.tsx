import React, { FC, useState } from 'react';
import styles from './Comments.module.css';

import SLIDER_DATA from './SliderData';
import SliderComponent from './SliderComponent';
import SliderButtons from './SliderButtons';
 
const Slider: FC = () => {
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    setPosition(position + 1);
  }

  const prevPosition = () => {
    setPosition(position - 1);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.sliderBack}></div>
      <div className={styles.sliderBody}>
        {SLIDER_DATA.slice(position, position + 3).map(data => <SliderComponent data={data} key={data.id} />)}
      </div>
      <SliderButtons position={position} next={nextPosition} prev={prevPosition} />
    </div>
  );
}
 
export default Slider;
