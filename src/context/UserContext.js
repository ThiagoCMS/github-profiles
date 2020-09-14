import { createContext } from 'react';

const INITIAL_CONTEXT = {
  user: {},
  setUser: () => {},
  error: '',
  setError: () => {},
};

const UserContext = createContext(INITIAL_CONTEXT);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
