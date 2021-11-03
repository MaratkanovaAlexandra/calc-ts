import React, { FC } from 'react';

import '../../styles/fonts.css';
import '../../styles/common.css';

import Intro from '../Intro';
import Logos from '../Logos';
import Speciation from '../Specialization';
import Portfolio from '../Portfolio';
import Comments from '../Comments';
import Pricing from '../Pricing';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

const App:FC = () => {
  return (
    <>
      <Intro />
      <Logos />
      <Speciation />
      <Portfolio />
      <Comments />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
