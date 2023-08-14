const { Schema, model } = require('mongoose');
const Product = new Schema({
  _id: { type: String },
  category: { type: String },
  subcategory: { type: String },
  type: { type: String },
  title: { type: String },
  images: { type: Array },
  cost: { type: Number },
  brend: { type: String },
  description: { type: String },
});
module.exports = model('Product', Product);