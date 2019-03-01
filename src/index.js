require('./config/enviroment');

const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const controllers = require('./controllers');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('web/ng-almundo-test/dist/ng-almundo-test'));

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "../web/ng-almundo-test/dist/ng-almundo-test", "index.html"));
});
app.use('/hotels', controllers.hotelsController);

app.listen(process.env.PORT, () => {
  console.log(`init in ${process.env.PORT}`);
});