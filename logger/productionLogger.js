// const winston = require("winston");
// const { Colorizer } = require('logform');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp}) => {
    return `[${level}] ${timestamp} ${message}`;
});

const productionLogger = () => {
    return createLogger({
        level: "info",
        format: combine(
            timestamp({format: "HH:mm:ss"}),
            myFormat,
        ),
        transports: [
            new transports.File({filename: "productionLogs.log"}),
            new transports.Console(),
        ]
    });
};

module.exports = productionLogger;