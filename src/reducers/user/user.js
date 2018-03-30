import * as actionTypes from '../../actions/user/actionTypes';

const initialState = {
    email: null,
    isAdmin: false,
    name: null,
    error: null,
};

const reducers = {
    [actionTypes.login]: (state, {
        email, isAdmin, name
    }) => ({
        ...state,
        email,
        isAdmin,
        name
    }),

    [actionTypes.logout]: (state) => initialState
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