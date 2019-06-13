'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/exercise_db', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Database works...");

        app.listen(port, () => {
            console.log("Back-end works...");
        })
    }
})