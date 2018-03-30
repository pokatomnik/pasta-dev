import * as actionTypes from '../../actions/error/actionTypes';

const initialState = null;

const reducers = {
  [actionTypes.setError]: (state, {title, text}) => ({
    ...state,
    title,
    text,
  }),

  [actionTypes.removeError]: () => initialState
};

export default (state, action) => {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  } else if (state) {
    return state;
  } else {
    return initialState;
  }
}