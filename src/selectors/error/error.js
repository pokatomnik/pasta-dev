export const selectError = ({error}) => error;

export const selectErrorExists = (state) => !!selectError(state);