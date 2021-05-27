var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

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

app.get("/heroes", function (req, res) {
  res.send({ "Heroes": heroes[Math.floor(Math.random() * heroes.length)] });
});

var server = app.listen(8081, function () {
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", 'localhost', port);
});
