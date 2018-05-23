/**
 * Checks is passed string is completley empty, also checks for just whitespace
 * @return {Boolean} True if empty, False is not empty
 */
export const isEmptyString = string => {
    return !/\S/.test(string);
};

export const anyStringsEmpty = arrayOfStrings => {
    return arrayOfStrings.some(isEmptyString);
};

export const deconstructWithPrefix = (object, prefix) => {
    let newObject = {};
    Object.keys(object).forEach((key, index) => {
        newObject[`${prefix}_${key}`] = object[key];
    });
    return newObject;
};

/**
 * Process Apollo GraphQL and returns a user facing error for us
 * @param  {Apollo GraphQL Error} error A valid Apollo GraphQL Error Object
 * @return {String} Error string to show the user
 */
export const apolloError = (error, fallback) => {
    console.log(error.graphQLErrors);
    // console.log(error.graphQLErrors);
    if (error.graphQLErrors && error.graphQLErrors.length > 0) {
        error = error.graphQLErrors[0];
        if (error.functionError && error.functionError.userFacingMessage) {
            return error.functionError.userFacingMessage;
        }
    }

    return fallback;
};

/**
 * Retrieves query param
 * @param {String} url 
 * @param {String} param 
 */
export const getQueryParam = (url, param) => {
    // Expects a raw URL
    param = param.replace(/[[]/, "[").replace(/[]]/, "]");
    var regexS = "[?&]" + param + "=([^&#]*)",
        regex = new RegExp(regexS),
        results = regex.exec(url);
    if (
        results === null ||
        (results && typeof results[1] !== "string" && results[1].length)
    ) {
        return "";
    } else {
        return decodeURIComponent(results[1]).replace(/\W/gi, " ");
    }
}
