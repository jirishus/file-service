var express         = require('express');
var bodyParser      = require('body-parser');
var phantom         = require('phantom');

// express app 
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// body parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', function(req,res) {
  res.send('index info');
});

app.get('/info', function(req,res) {

    var ranNum = Math.floor(Math.random() * 100)

    res.send('info request' + ranNum);

});

app.post('/convert', function(req,res) {

    console.log('converting');
    
    var userSite    = req.body;
    var userUrl     = userSite.site;
    var fileName    = userSite.site.split('.')[1];
    
    
    phantom.create(function(ph) {
        ph.createPage(function(page) {
            page.open(userUrl, function(status) {

                console.log(status);

                if(status === 'success') {
                    page.render('public/' + fileName + '.pdf', function() {

                       res.end('File Converted');

                       ph.exit();

                    });
                }
            });
        });
    }, {
        dnodeOpts: {weak: false}
    });  
    

});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
