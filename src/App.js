import React from 'react';

import Home from './pages/Home';
import useReducer from './hooks/useReducer';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import userReducer from './reducers/userReducer';
import themeReducer from './reducers/themeReducer';

function App() {
  const [userState, userDispatch] = useReducer(userReducer);
  const [themeState, themeDispatch] = useReducer(themeReducer);

  return (
    <UserProvider value={{
      state: userState, dispatch: userDispatch,
    }}
    >
      <ThemeProvider value={{ state: themeState, dispatch: themeDispatch }}>
        <Home />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
