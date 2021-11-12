import React, { FC } from 'react';

import TariffCard from '../TariffCard';
import TariffData from '../TariffData';

import styles from './Tariffs.module.css';

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
