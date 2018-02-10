// Load required node modules

var twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var keys = require("./keys.js");
var fs = require('fs');







require("dotenv").config();


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter) {
  consumer_key: "process.env.7MTKassYUAzSfxpIlLXlcnABe",
  consumer_secret: "process.env.QlKUUdPkN60v1ykmJiWLgDTCS70dsOH4Ru3z5PfMGcVym5OGEb",
  access_token_key: "",
  access_token_secret: ""
});









