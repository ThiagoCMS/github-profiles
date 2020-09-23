import React, { useContext } from 'react';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import NotFound from '../../components/NotFound';
import Footer from '../../components/Footer';
import UserContext from '../../context/UserContext';

function Home() {
  const { state } = useContext(UserContext);
  const { hasError } = state;

  return (
    <>
      <Header />
      {hasError ? <NotFound /> : <Profile />}
      <Footer />
    </>
  );
}

export default Home;
