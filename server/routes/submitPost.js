/**
 * Created by gwenpaul on 2/9/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/submitpost.html'));
});

module.exports = router;