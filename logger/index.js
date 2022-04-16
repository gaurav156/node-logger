const developmentLogger = require('./developmentLogger');
const productionLogger = require('./productionLogger')

let logger = null;

if  (process.env.NODE_ENV.trim() === "development") {
    logger = developmentLogger();
}

if  (process.env.NODE_ENV.trim() === "production") {
    logger = productionLogger();
}

module.exports = logger;