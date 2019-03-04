require('./config/enviroment');

const controllers = require('./controllers');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Enable cors
app.use(cors());

// Configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static client bundle
app.use(express.static('web/ng-almundo-test/dist/ng-almundo-test'));

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../web/ng-almundo-test/dist/ng-almundo-test", "index.html"));
});
app.use('/hotels', controllers.hotelsController);

// DB
require('./models/hotels.model');
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => err ? console.log(err) : console.log('DB online'));

// Init app
app.listen(process.env.PORT, () => {
  console.log(`init in ${process.env.PORT}`);
});