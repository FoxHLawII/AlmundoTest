const path = require("path");
const fs = require('fs');

const getData = () => {
  return new Promise((resolve, reject) => {
    try {
      const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data.json')));
      resolve(data);
    } catch (error) {
      reject(new Error(error));
    }
  });
};

module.exports = {
  getData
}