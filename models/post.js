/**
 * Created by gwenpaul on 2/4/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title: { type: String, required: true },
    date: String,
    author: String,
    post: String
});

var blogs = mongoose.model('blogs', BlogSchema);

module.exports = blogs;
//Blogs is collectiosn name

//schema connects to collection

