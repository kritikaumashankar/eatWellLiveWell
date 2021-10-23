const mongoose = require('mongoose');

const ReviewsSchema = new mongoose.Schema({
  review:String,
  reviewer: String,
  image: String,
  priority: Number
},{ strict: false })

module.exports = mongoose.models.Reviews || mongoose.model('Reviews', ReviewsSchema);