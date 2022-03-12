const { ERROR_CODE_UNDEFINED } = require('../utils/utils');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE_UNDEFINED;
  }
}

module.exports = NotFoundError;
