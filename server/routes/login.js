/**
 * Created by gwenpaul on 2/8/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var passport = require('passport');
var User = require('../../models/users');
var session = require('express-session');

var localStrategy = require('passport-local').Strategy;

router.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 60000, secure:false}
}));

passport.serializeUser(function(user, done){
    console.log('Serialize ran');

    console.log(user.id, user._id);
    done(null, user.id);
});

passport.deserializeUser(function(user, done){

    console.log('Deserialize ran');

    //Go get User object to put on req.user

    User.findById(user.id, function(err, user){
        if(err){
            done(err);
        }
        done(null, user); //req.user
    })
});

passport.use('local', new localStrategy({
        passReqToCallback:true, usernameField: 'username'},
    function(req, username, password, done){

        //Checking the password

        User.findOne({username: username}, function(err, user){
            if(err){
                console.log(err);
            }

            if(!user){
                return done(null, false);
            }

            user.comparePassword(password, function(err, isMatch){
                if(err){
                    console.log(err);
                }

                if(isMatch){
                    done(null, user); //success
                } else {
                    done(null, false); //fail
                }
            })
        });
    }));

router.post('/', passport.authenticate('local', {
    successRedirect: '/submit', failureRedirect:'/'
}));


router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/login.html'));
});


module.exports = router;


