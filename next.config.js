
require('dotenv').config();

module.exports = {
  env:{
    USEREMAIL: process.env.USEREMAIL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
}