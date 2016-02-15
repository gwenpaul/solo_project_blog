/**
 * Created by gwenpaul on 2/10/16.
 */
var express = require('express');
var path = require('path');
var router = express.Router();


router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/resume.html'));
});

module.exports = router;