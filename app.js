const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var app = express();

// mongoose.connect('mongodb://localhost/bookstore');
// var db = mongoose.connection;

app.get('/',function (req, res) {
    res.send('HI!');
});

app.listen(3000);
console.log('connected');