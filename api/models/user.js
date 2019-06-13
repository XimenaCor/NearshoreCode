'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
    email: String,
    amount: Number,
});
module.exports = mongoose.model('user', userSchema);