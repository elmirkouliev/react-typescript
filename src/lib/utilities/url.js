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
