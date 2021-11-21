const moment = require('moment');

exports.getDateString = (date) => {
    return moment(date).format('YYYY-MM-DD');
}

exports.getDateDifference = (diffType, startDate, endDate) => {
    if (typeof startDate === "string") {
        startDate = new Date(startDate)
    }
    if (typeof endDate === "string") {
        endDate = new Date(endDate)
    }
    const a = moment(startDate, 'M/D/YYYY');
    const b = moment(endDate, 'M/D/YYYY');
    return a.diff(b, diffType ? diffType : 'd');
}
