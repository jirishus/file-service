// require dependencies
var express = require('express');

// create express app
var app = express();

// Define Routes

// Index
app.get('/', function(req,res) {
    res.send('Base File Exchange')
});

app.get('/info', function(req,res) {

    var ranNum = Math.floor(Math.random() * 100);

    res.send('Generated Number: ' + ranNum)

});

// Listen to port 9500
app.listen(9500, function() {
    console.log('listening on port 9500')
});