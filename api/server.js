var express = require("express");
var app = express();

//list of heroes
var heroes = [
  "Mahatma Gandhi",
  "Bhagat singh",
  "Nelson Mandela",
  "Subhash Chandra Bose",
  "B. R. Ambedkar",
  "A. P. J. Abdul Kalam",
  "Vallabhbhai Patel",
  "J. R. D. Tata",
];

//Initiate router with same url that we'll be using in nginx
var api = express.Router();

//add all APIs
api.get("/", function (req, res) {
   res.send("Hello World");
});
api.get("/heroes", function (req, res) {
  res.send({ Heroes: heroes[Math.floor(Math.random() * heroes.length)] });
});

app.use("/api", api);


var server = app.listen(8081, function () {
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", 'localhost', port);
});
