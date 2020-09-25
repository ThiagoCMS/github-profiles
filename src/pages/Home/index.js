import React from 'react';

import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import Footer from '../../components/Footer';

const Home = React.memo(() => (
  <>
    <Header />
    <MainSection />
    <Footer />
  </>
));

export default Home;
