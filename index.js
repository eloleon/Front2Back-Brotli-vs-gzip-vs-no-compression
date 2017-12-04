/**
 * Created with WebStorm.
 */
var express = require('express');
var app = express();
var compression = require('compression');
var shrinkRay = require('shrink-ray');

// app.use(compression()); // gzip
app.use(shrinkRay()); // Brotli

app.use(express.static('public'));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log('\nreq:');
  res.send('hello world');

});

app.listen(3000, function () {
  console.log('Listening on port 3000...');
})