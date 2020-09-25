import { useReducer } from 'react';

export default function ({ INITIAL_STATE, reducer }) {
  return useReducer(reducer, INITIAL_STATE);
}
