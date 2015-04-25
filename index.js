// require dependencies
var express = require('express');

// create express app
var app = express();

app.set('port', (process.env.PORT || 5000));

// Define Routes

// Index
app.get('/', function(req,res) {
    res.send('Base File Exchange')
});

app.get('/info', function(req,res) {

    var ranNum = Math.floor(Math.random() * 100);

    res.send('Generated Number: ' + ranNum)

});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});