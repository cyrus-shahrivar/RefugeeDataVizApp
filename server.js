var express = require('express');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));

//much of the below express calls had to be slightly redone due to heroku compatibility
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('public/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
