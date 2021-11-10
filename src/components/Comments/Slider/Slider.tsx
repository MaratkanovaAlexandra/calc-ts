import React, { FC, useState } from 'react';
import styles from './Slider.module.css';

import SLIDER_DATA from '../SliderData/SliderData';
import SliderComponent from '../SliderComponent/SliderComponent';
import SliderButtons from '../SliderButtons/SliderButtonContainer';

const SHOWEN_SILDES = 3;
const MOVE_SLIDE = 1;
 
const Slider: FC = () => {
  const [position, setPosition] = useState(0);

  const nextPosition = () => {
    setPosition(position + MOVE_SLIDE);
  }

  const prevPosition = () => {
    setPosition(position - MOVE_SLIDE);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.sliderBack}></div>
      <div className={styles.sliderBody}>
        {SLIDER_DATA.slice(position, position + SHOWEN_SILDES).map(data => <SliderComponent data={data} key={data.id} />)}
      </div>
      <SliderButtons position={position} next={nextPosition} prev={prevPosition} />
    </div>
  );
}
 
export default Slider;
