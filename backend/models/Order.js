const { Schema, model } = require('mongoose');
const Order = new Schema({
    date: { type: Number },
    items: [],
    cost: { type: Number },
    category: { type: String },
    radio: { type: String },
    telephone: { type: String },
    name: { type: String },
    email: { type: String },
    radioDelivery: { type: String },
    adress: { type: String },
    house: { type: String },
    apartaments: { type: String },
    entrance: { type: String },
    message: { type: String },
    isLifting: { type: Boolean },
    isAnyName: { type: Boolean }
});
module.exports = model('Order', Order);