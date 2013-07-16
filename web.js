var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer (256);

app.get('/', function(request, response) {

  fs.readFile('index.html', 'utf-8', function (err, buffer) {
    if (err) throw err;
    response.send( buffer.toString('utf-8') );
  });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
