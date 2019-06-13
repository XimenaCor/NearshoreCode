'use strict'

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//routes
var userRoutes = require('./routes/user');

//headers
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-API-KEY,Origin,X-Requested-With,Content-Type,Aceppt,Access-Control-Request-Method,user,management');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTION,DELETE');
    res.header('Allow', 'GET,POST,PUT,OPTION,DELETE');
    next();
});
//base routes
app.use('/api', userRoutes);
app.use(express.static('public'));

module.exports = app;