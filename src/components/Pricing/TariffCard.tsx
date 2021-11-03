import React, { FC } from 'react';
import styles from './Pricing.module.css';
import cn from 'clsx';

import TariffsDataType from './TariffsDataType';
import Button from '../Button';
import standardOptions from './standardOptions';
import extendedOptions from './extendedOptions';

type TariffCardProps = {
  data: TariffsDataType
}
 
const TariffCard: FC<TariffCardProps> = (props) => {
  const { title, mode, price, optionsMode, buttonMode } = props.data;

  const getPrice = () => price !== 'Custom'? `$${price}` : price;

  const getBtnText = () => price === 'Custom'? 'Contact Us' : 'Request Demo';

  const getOptions = () => optionsMode === 'extended'? extendedOptions : standardOptions;
  
  return (
    <div className={cn(styles.tariffCard, styles[mode])}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardPrice}>{getPrice()}</p>
      {getOptions()}
      <Button text={getBtnText()} size="big" type={buttonMode} className={styles.buttonPosition} />
    </div>
  );
}
 
export default TariffCard;
