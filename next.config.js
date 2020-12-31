
require('dotenv').config();

module.exports = {
  env:{
    PUBLIC_URL: "http://localhost:3000/",
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
}