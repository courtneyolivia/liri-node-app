// User Based Authentication

var Twitter = require("twitter");

var client = new Twitter({
  consumer_key: "process.env.7MTKassYUAzSfxpIlLXlcnABe",
  consumer_secret: "process.env.QlKUUdPkN60v1ykmJiWLgDTCS70dsOH4Ru3z5PfMGcVym5OGEb",
  access_token_key: "",
  access_token_secret: ""
});

var params = { screen_name: "nodejs" };
client.get("statuses/user_timeline", params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



