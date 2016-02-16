var express = require('express');
var mongoose = require('mongoose');
var index = require('./routes/index');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var post = require('./routes/submitPost');
var contact = require('./routes/contact');
var login = require('./routes/login');
var submit = require('./routes/submitPost');
var blog = require('./routes/blog');
var User = require('./../models/users');
var resume = require('./routes/resume');
var about = require('./routes/about');





var app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());

app.use(logger('dev'));

var mongoURI = "mongodb://localhost:27017/blog";
var MongoDB = mongoose.connect(mongoURI).connection;


MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
    console.log('mongodb connection open!');
});


//routers
app.use('/', index);
app.use('/contact', contact);
app.use('/data', post);
app.use('/login', login);
app.use('/submit', submit);
app.use('/blog', blog);
app.use('/about', about);
app.use('/resume', resume);

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("listening on: ", port);
});


module.exports = app;
//server establishes connection


