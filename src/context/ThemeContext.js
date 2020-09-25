import { createContext } from 'react';

const INITIAL_CONTEXT = {
  theme: undefined,
  dispatch: () => {},
};

const ThemeContext = createContext(INITIAL_CONTEXT);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
