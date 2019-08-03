require('dotenv/config');

module.exports = {
  NODE: process.env.NODE_ENV,
  PORT: process.env.PORT,
  APP_URL_BACKEND: process.env.APP_URL_BACKEND,
  APP_URL_FRONTEND: process.env.APP_URL_FRONTEND
};
