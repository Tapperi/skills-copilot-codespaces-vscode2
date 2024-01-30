// Create web server
// Load modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var Comment = require("./models/comment");
var Campground = require("./models/campground");
var seedDB = require("./seeds");

mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
seedDB();

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
        
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground:");
//             console.log(campground);
//         }
//     });

// var campgrounds = [
//         {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
//         {name: "Granite Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
//         {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
//         {name: "Granite Hill", image: "https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
//         {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},

