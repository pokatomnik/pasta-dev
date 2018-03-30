export const selectIsLogged = ({user}) => !!(user.email && user.name);

export const selectIsAdmin = ({user}) => !!user.isAdmin;

export const selectName = ({user}) => user.name;

export const selectUser = ({user}) => user;