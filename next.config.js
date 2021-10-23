
require('dotenv').config();

module.exports = {
  env:{
    USEREMAIL: process.env.USEREMAIL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB: process.env.MONGODB_DB,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_MESSAGE_SENDER_ID: process.env.FIREBASE_MESSAGE_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    DB_URL_API: process.env.DB_URL_API
  }
}