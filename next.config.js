
require('dotenv').config();

module.exports = {
  env:{
    PUBLIC_URL: process.env.PUBLIC_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
}