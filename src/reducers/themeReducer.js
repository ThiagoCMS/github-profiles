export const INITIAL_STATE = {
  theme: localStorage.getItem('theme') || 'light',
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH_THEME':
      localStorage.setItem('theme', state.theme === 'light' ? 'dark' : 'light');
      return {
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      throw new Error('Error in themeReducer: action.type not allowed');
  }
}

export default {
  INITIAL_STATE,
  reducer,
};
