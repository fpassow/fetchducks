'use strict';

var express = require('express');
var app = express();

   // app.disable('etag');//Recompute and resend. Disable sending HTTP 304s.

app.use('/', express.static('public'));

const port = 3000;
app.listen(port);
console.log('Listening on port ' + port + '.');
