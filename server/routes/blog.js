/**
 * Created by gwenpaul on 2/9/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var Post = require('../../models/post');
//var blogs = require('../../models/post');

router.post('/add', function(request, response){
    console.log(request.body);
    Post.create(request.body, function(error, post){
        if(error){
            console.log("there was an error saving", error)
        } else {
            console.log('sucess');
            response.send(200);
        }
    });
});

router.post('/add', function(request, response){
    console.log(request.body);

    //Post.create(request.body, function(error, post){
    //    if(error){
    //        console.log("there was an error saving post", error)
    //    } else {
    //        console.log('sucess');
    //        response.send(200);
    //
    //    }
    //}); //2nd argument is result of post.create(request.body...

    //var author = req.body.author;
    //var date = req.body.date;
    //var title = req.body.title;
    //var post = req.body.post;

//blogs.insert({submission}, function (err, result) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('success');
//    }
//    //Close connection
//    db.close();
//});
router.get('/see', function(request, response, next){
    blogs.find({}, function(err, data){
        response.send(data);
    });
});



router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/blogPost.html'));
});

//router.delete('/delete', function(request, response){
//    console.log("in delete router", request);
//});

module.exports = router;

//this route is where the submission object gets send to the database. Post.create creates the blogpost using the
//model it gets from var Post = require('../../models/post');