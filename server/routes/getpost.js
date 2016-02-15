/**
 * Created by gwenpaul on 2/5/16.
 */
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var blogs = require('../../models/post');

var router = express.Router();
var base = {};

router.get('/', function(request, response, next){
    blogs.find({}, function(err, data){
        response.send(data);
    });
});

module.exports = router;