export const selectIsLogedIn = state => state.auth.isLogedIn;

export const selectUserName = state => state.auth.user.name;

export const selectToken = state => state.auth.token;

export const selectIsFetchingUser = state => state.auth.isFetchingUser;
