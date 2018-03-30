import * as actionTypes from './actionTypes';

export default {
  [actionTypes.setError]: (title, text) => ({
    type: actionTypes.setError,
    title,
    text
  }),

  [actionTypes.removeError]: () => ({
    type: actionTypes.removeError
  })
};