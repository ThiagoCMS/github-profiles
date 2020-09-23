import React, { useReducer } from 'react';

import Home from './pages/Home';
import { UserProvider } from './context/UserContext';
import { INITIAL_STATE, reducer } from './reducers/userReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <UserProvider value={{
      state, dispatch,
    }}
    >
      <Home />
    </UserProvider>
  );
}

export default App;
