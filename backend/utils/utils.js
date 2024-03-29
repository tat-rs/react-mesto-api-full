const ERROR_CODE_NOCORRECT = 400;
const ERROR_UNAUTHORIZATED = 401;
const ERROR_CODE_FORBIDDEN = 403;
const ERROR_CODE_UNDEFINED = 404;
const ERROR_CODE_CONFLICT = 409;
const ERROR_CODE_DEFAULT = 500;
const SUCCESS_CODE_OK = 200;
const SUCCESS_CODE_CREATED = 201;

const SOLT_ROUND = 10;

const MAIN_URLS = [
  'https://mesto-front.vercel.app',
  'https://mesto-front.vercel.app/',
  'http://localhost:3000',
  'http://localhost:3000/',
  'http://localhost:3001',
  'http://localhost:3001/',
];

const DOMAINS = [
  '.mesto-front.vercel.app',
  '.localhost:3000',
  '.localhost:3001',
];

module.exports = {
  ERROR_CODE_NOCORRECT,
  ERROR_UNAUTHORIZATED,
  ERROR_CODE_UNDEFINED,
  ERROR_CODE_FORBIDDEN,
  ERROR_CODE_CONFLICT,
  ERROR_CODE_DEFAULT,
  SUCCESS_CODE_OK,
  SUCCESS_CODE_CREATED,
  SOLT_ROUND,
  MAIN_URLS,
  DOMAINS,
};
