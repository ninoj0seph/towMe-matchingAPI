const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    AllStateInsurance = require('./models/allStateInsurance');

var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/TowMe', { useMongoClient: true });
var db = mongoose.connection;

app.post('/',function (request, response) {
    AllStateInsurance.getAllStateInsurance(function (err, users) {
        if(err) throw err;
        response.json(users);
    });
});

app.listen(3000);
console.log('connected');