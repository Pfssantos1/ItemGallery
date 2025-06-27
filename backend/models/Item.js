// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String, required: true },
  category:    { type: String, required: true },
  imageUrl:    { type: String, required: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);
