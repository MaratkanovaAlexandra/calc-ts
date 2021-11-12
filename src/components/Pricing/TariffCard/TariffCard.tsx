import React, { FC } from 'react';

import TariffsDataType from '../TariffData/TariffsDataType';
import Button from '../../Button';
import Options from './Options';

import cn from 'clsx';
import styles from './TariffCard.module.css';

type TariffCardProps = {
  data: TariffsDataType
}

const getPrice = (price: string|number) => price !== 'Custom'? `$${price}` : price;

const getBtnText = (price: string|number) => price === 'Custom'? 'Contact Us' : 'Request Demo';

const getOptions = (optionsMode: string) => optionsMode === 'extended'? Options.extended : Options.standard;
 
const TariffCard: FC<TariffCardProps> = (props) => {
  const { title, mode, price, optionsMode, buttonMode } = props.data;

  return (
    <div className={cn(styles.tariffCard, styles[mode])}>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardPrice}>{getPrice(price)}</p>
      <ul className={styles.optionsList}>
        {getOptions(optionsMode).map((option) => <li>{option}</li> )}
      </ul>
      <Button text={getBtnText(price)} size="big" type={buttonMode} className={styles.buttonPosition} />
    </div>
  );
}
 
export default TariffCard;
