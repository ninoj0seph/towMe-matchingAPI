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

app.get('*', function (request, response) {
   response.json('Please Configure Post Request With Content-Type : application / json and send any json string');
});


app.listen(3001, 'localhost');
console.log('connected');