import React, { FC } from 'react';

import SliderData from "../SliderData/SliderDataType";
import Star from '../../../assets/icons/star.svg';

import styles from './SliderComponent.module.css';

type SliderDataProps = {
  key? :number,
  data: SliderData
}
 
const getStarts = (stars: number): number[] => {
  const starsArray:number[] = []
  for (let i = 0; i<stars; i++) {
    starsArray.push(i);
  }
  return starsArray;
}

const SliderComponent: FC<SliderDataProps> = (props) => {
  const { title, text, stars, autor } = props.data;

  return (
    <div className={styles.sliderComponent}>
      <h5 className={styles.sliderComponentBold}>{title}</h5>
      <p className={styles.sliderComponentNormal}>{`“${text}”`}</p>
      <div className={styles.stars}>
        {getStarts(stars).map((star) => 
          <img src={Star} alt='star' key={star} className={styles.star} />
        )}
      </div>
      <h5 className={styles.sliderComponentBold}>{autor}</h5>
    </div>
  );
}
 
export default SliderComponent;
