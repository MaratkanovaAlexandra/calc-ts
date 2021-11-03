import React, { FC } from 'react';
import styles from './Pricing.module.css';

import TariffCard from './TariffCard';
import TariffData from './TariffData'
 
const Tariffs: FC = () => {
  return (
    <div className={styles.tariffs}>
      {TariffData.map(data => 
        <TariffCard data={data} key={data.id} />  
      )}
    </div>
  );
}
 
export default Tariffs;
