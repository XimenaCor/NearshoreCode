'use strict'

var express = require('express');
var api = express.Router();
var userController = require('../controllers/user');

api.post('/save', userController.save);
api.get('/verifyEmail/:email', userController.verifyEmail);
api.put('/updateAmountFirstTime/:email', userController.updateAmountFirstTime);

module.exports = api;