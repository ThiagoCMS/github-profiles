export const INITIAL_STATE = {
  isLoading: false,
  hasError: false,
  user: {},
};

export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case 'FETCH_FAIL':
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        user: action.payload,
      };
    default:
      throw new Error('Error in userReducer: action.type not allowed');
  }
}

export default {
  INITIAL_STATE,
  reducer,
};
