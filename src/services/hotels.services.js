const db = require('../data/db');
const { HotelModel } = require('../models');

// Local file json
const getAll = () => {
  return db.getData();
}

const getAllFilteredBy = (name, stars) => {
  return getAll()
    .then(data => name ? 
      data.filter(hotel => hotel.name.toLowerCase().includes(name.toLowerCase())) : data)
    .then(data => stars ? data.filter(hotel => hotel.stars === stars) : data)
    .catch(err => new Error(err));
}

// Mongo db
const getAllHotels = () => {
  return HotelModel.find()
    .then(data => data)
    .catch(err => { throw new Error(err)});
}

const createHotel = (hotel) => {
  return new HotelModel(hotel).save()
    .then(data => data)
    .catch(err => { throw new Error(err)});
}

const updateHotel = (hotel) => {
  if (!hotel.id) throw new Error('Id necesario');
  return HotelModel.findByIdAndUpdate(hotel.id, hotel)
    .then(data => data ? data : new Error('Hotel no encontrado'))
    .catch(err => new Error(err));;
}

const deleteHotel = (id) => {
  return HotelModel.deleteOne({ _id: id })
    .then(data => ({ deleted: data.n }))
    .catch(err => new Error(err));
}

module.exports = {
  getAll,
  getAllFilteredBy,
  getAllHotels,
  createHotel,
  updateHotel,
  deleteHotel
}