const moment = require("moment");

exports.getRemainTime = (req, res) => {
    const now = moment();
    const endOfDay = moment().endOf("day");
    const duration = moment.duration(endOfDay.diff(now));
    res.send({
        date: moment().format("YYYY-MM-DD"),
        time: moment.utc(duration.as("milliseconds")).format("HH:mm:ss"),
    });
};
