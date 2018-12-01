'use strict';

var express = require('express');
var app = express();
var path = require('path')

//Response is delayed for this many mS. Use to test loading spinner.
var msDelay = 3000;

app.get('/ducks.json', 
  function(req, res) {
    setTimeout(
      function() {
        res.sendFile(path.join(__dirname, 'public', 'ducks.json'));
      }, 
      msDelay
    );
  }
);

app.use('/', express.static('public'));

const port = 3000;
app.listen(port);
console.log('Listening on port ' + port + '.');
