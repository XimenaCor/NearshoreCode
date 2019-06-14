'use strict'
var userSchema = require('../models/user');

function save(req, res) {
    var user = new userSchema();
    var params = req.body;

    var emailUser = req.params.email;
    userSchema.findOne({ 'email': emailUser }).exec().then(data => {
        if (data) {
            console.log("user exists");
            res.status(200).send({ data });
        } else {
            user.amount = 0;
            user.email = params.email;

            user.save().then(data => {
                res.status(200).send({ data });
            }).catch(err => {
                console.log(err);
                res.status(500).send(err);
            });
        }
    }).catch(err => {
        res.status(500).send(err);
    })
}

function verifyEmail(req, res) {
    var emailUser = req.params.email;
    userSchema.findOne({ 'email': emailUser }).exec().then(data => {
        if (data) {
            res.status(200).send({ user: data });
        }
    }).catch(err => {
        res.status(500).send(err);
    })
}

function verifyLoan(req, res) {
    var email = req.params.email;
    var user = req.body;
    userSchema.findOneAndUpdate({ email: email }, user).exec().then(data => {
        res.status(200).send({ user: data });
    }).catch(err => {
        res.status(500).send(err);
        console.log(err)
    });
}


module.exports = {
    save,
    verifyEmail,
    verifyLoan
}