import userUtils from "lib/utilities/user";

/* Action types as consant */
export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const STORE_USER = "STORE_USER";
export const REFRESH_USER = "REFRESH_USER";

export const refreshUser = () => ({
    type: REFRESH_USER,
});

export const cacheUser = user => dispatch => {
    dispatch({ type: STORE_USER, user });
};

/* Action creators */
export const saveUser = (token, newUser = false) => dispatch => {
    userUtils.login(token);
    dispatch({ type: SET_LOGGED_IN, loggedIn: true, newUser });
};

export const logout = () => dispatch => {
    userUtils.logout();
    dispatch({ type: SET_LOGGED_IN, loggedIn: false });
};