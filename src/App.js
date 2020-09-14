import React, { useState } from 'react';

import Home from './pages/Home';
import { UserProvider } from './context/UserContext';

function App() {
  const [user, setUserState] = useState({});
  const [error, setErrorState] = useState('');

  function setUser(newUser) {
    setUserState(newUser);
  }

  function setError(newError) {
    setErrorState(newError);
  }

  return (
    <UserProvider value={{
      user, setUser, error, setError,
    }}
    >
      <Home />
    </UserProvider>
  );
}

export default App;
