'use strict'

var express = require('express');
var api = express.Router();
var userController = require('../controllers/user');

api.post('/save/:email', userController.save);
api.get('/verifyEmail/:email', userController.verifyEmail);
api.put('/verifyLoan/:email', userController.verifyLoan);

module.exports = api;