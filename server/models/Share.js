const mongoose = require('mongoose');

const shareSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Share', shareSchema);
