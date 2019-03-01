require('./config/enviroment');

const bodyParser = require('body-parser');
const express = require('express');

const controllers = require('./controllers');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/hotels', controllers.hotelsController);

app.listen(process.env.PORT, () => {
  console.log(`init in ${process.env.PORT}`);
});