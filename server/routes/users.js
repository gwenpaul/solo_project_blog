/**
 * Created by gwenpaul on 2/10/16.
 */
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var User = require('../../models/users');

var router = express.Router();
var base = {};

router.get('/', function(request, response, next){
    blogs.find({}, function(err, data){
        response.send(data);
    });
});

module.exports = router;