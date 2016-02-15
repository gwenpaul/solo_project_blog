var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
   response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

//router.post('/login', passport.authenticate('local', {
//   successRedirect: '/success',
//   failureRedirect: '/fail'
//}));

module.exports = router;

