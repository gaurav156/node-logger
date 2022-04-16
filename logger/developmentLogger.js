// const winston = require("winston");
// const { Colorizer } = require('logform');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp}) => {
    return `${timestamp} [${level}] ${message}`;
});

const developmentLogger = () => {
    return createLogger({
        level: "debug",
        format: combine(
            timestamp({format: "HH:mm:ss"}),
            myFormat,
        ),
        transports: [
            new transports.File({filename: "developmentLogs.log"}),
            new transports.Console(),
        ]
    });
};

module.exports = developmentLogger;