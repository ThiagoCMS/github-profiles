import React, { useContext } from 'react';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import NotFound from '../../components/NotFound';
import Footer from '../../components/Footer';
import UserContext from '../../context/UserContext';

function Home() {
  const { error } = useContext(UserContext);

  return (
    <>
      <Header />
      {error ? <NotFound /> : <Profile />}
      <Footer />
    </>
  );
}

export default Home;
