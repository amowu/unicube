var express = require('express');

var app = express();
  // Configuration
  app.configure(function() {
  app.use(express.logger('dev'));
  app.use(express.static('../web-client'));
});

app.listen(80);
console.log('===============================');
console.log('Web server listening on port 80');
console.log('===============================');
