import React, { useContext } from 'react';

import UserContext from '../../context/UserContext';
import Profile from '../Profile';
import NotFound from '../NotFound';
import Loader from '../Loader';

function MainSection() {
  const { state } = useContext(UserContext);

  if (state.hasError) {
    return <NotFound />;
  } if (state.isLoading) {
    return <Loader />;
  }
  return <Profile />;
}

export default MainSection;
