import React, { FC } from 'react';

import PageLayout from '../PageLayout';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';


const Footer: FC = () => {
  return (
    <footer>
      <PageLayout>
        <FooterTop />
        <FooterBottom />
      </PageLayout>
    </footer>
  );
}
 
export default Footer;
