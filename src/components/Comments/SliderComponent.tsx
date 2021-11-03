import React, { FC } from 'react';
import styles from './Comments.module.css';

import SliderData from "./SliderDataType";
import Star from '../../assets/icons/star.svg';

type SliderDataProps = {
  key? :number,
  data: SliderData
}
 
const SliderComponent: FC<SliderDataProps> = (props) => {
  const { title, text, stars, autor } = props.data;

  const getStarts = (stars: number): number[] => {
    const starsArray:number[] = []
    for (let i = 0; i<stars; i++) {
      starsArray.push(i);
    }
    return starsArray;
  }

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
