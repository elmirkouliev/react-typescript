/**
 * Action types as consant
 */
export const TOGGLE_SNACKBAR = "TOGGLE_SNACKBAR";
export const UPDATE_LOADING = "UPDATE_LOADING";
export const TOGGLE_SIGNUP_MODAL = "TOGGLE_MODAL";

//Action creators

/**
 * Shows or hides the snackbar in state
 * @param  {String}  snackbarText Text of the snackbar
 * @param  {Boolean} show Whether to show or hide, shown by default
 */
export const toggleSnackbar = (snackbarText = "", show = true) => dispatch => {
    dispatch({
        type: TOGGLE_SNACKBAR,
        show,
        snackbarText,
    });

    // Fire off dispatch to prevent the snackbar from showing up again
    setTimeout(() => {
        dispatch({ type: TOGGLE_SNACKBAR, show: false, snackbarText: "" });
    }, 5000);
};

/**
 * Set's loading state
 * @param  {boolean} loading Is loading or not
 */
export const toggleSignUpModal = show => ({
    type: TOGGLE_SIGNUP_MODAL,
    show,
});


/**
 * Set's loading state
 * @param  {boolean} loading Is loading or not
 */
export const enableLoading = loading => ({
    type: UPDATE_LOADING,
    loading,
});
