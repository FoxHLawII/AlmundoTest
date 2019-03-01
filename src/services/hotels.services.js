const db = require('../data/db');

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

module.exports = {
  getAll,
  getAllFilteredBy
}