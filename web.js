var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer (256);


fs.readFile('index.html', 'utf8', function (err, buffer) {
  if (err) throw err;
});

app.get('/', function(request, response) {
 response.send( buffer.toString('utf8') );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
