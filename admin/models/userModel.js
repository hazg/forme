var mongoose = require('mongoose');

var excelSchema = new mongoose.Schema({
    category: { type: String },
    subcategory: { type: String },
    type: { type: String },
    title: { type: String },
    images: { type: Array },
    cost: { type: Number },
    brend: { type: String },
    description: { type: String },
});

module.exports = mongoose.model('Product', excelSchema);