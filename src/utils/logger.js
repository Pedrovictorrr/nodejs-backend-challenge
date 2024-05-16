// utils/logger.js
const fs = require('fs');

const logFilePath = '../../logs/error.log';

const logger = {
  error: (error) => {
    const log = {
      timestamp: new Date().toISOString(),
      message: error.message,
      stack: error.stack
    };

    fs.appendFileSync(logFilePath, JSON.stringify(log) + '\n');
  }
};

module.exports = logger;
