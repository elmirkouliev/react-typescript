const moment = require("moment");

export const fromNow = timestamp => {
    return moment(timestamp).fromNow();
};

export const formatTime = (timestamp, format = 'MMMM Do, YYYY') => {
    return moment(timestamp).format(format);
}