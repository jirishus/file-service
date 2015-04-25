var express = require('express');
var phantom = require('phantom');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
  res.send('index info');
});

app.get('/info', function(req,res) {

    var ranNum = Math.floor(Math.random() * 100)

    res.send('info request' + ranNum);

});

app.get('/convert', function(req,res) {

    phantom.create(function(ph) {
        ph.createPage(function(page) {
            page.open('http://www.brandongagon.com', function(status) {
                if(status === 'success') {
                    page.render('public/newfile.pdf', function() {
                      res.end('File Converted');
                   });
                }
            });
        });
    });  

});



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});