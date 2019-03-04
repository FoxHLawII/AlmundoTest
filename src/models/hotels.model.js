const mongoose = require('mongoose');
const { Schema } = mongoose;

const HotelSchema = new Schema({
  name: { type: String, required: [true, 'El campo es necesario'], maxlength: 30 },
  stars: { type: Number, required: [true, 'El campo es necesario'], min: 1, max: 5 },
  price: { type: Number, required: [true, 'El campo es necesario'], min: 0, max: 9999999 },
  image: { type: String, required: false, default: 'default.png' },
  amenities: { type: Array, required: [true, 'El campo es necesario'] }
});

module.exports = mongoose.model('Hotel', HotelSchema, 'hotels');