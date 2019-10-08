require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var itemRoute = require('./api/routes/item.route');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

var port = 4000;
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
  res.send('ok');
});
app.use('/items', itemRoute);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
