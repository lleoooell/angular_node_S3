var express = require('express');
var app = express();
var listeEleves = require('./data/data');


// console.log('hello ' + JSON.stringify(listeEleves));

var toReturn  = [{
	"firstname" : 'leo',
	"lastname" : 'casagrande',
	"skills" : 'javascript'

},{
	"firstname" : 'jc',
	"lastname" : 'baudier',
	"skills" : 'php'

}];

// je déclare mes fichiers statiques
app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));

// une modif
app.get('/', function (req, res) {
   res.sendFile(__dirname + '/client/index.html');
});

app.get('/card.html', function (req, res) {
   res.sendFile(__dirname + '/client/card.html');
});

app.get('/eleves', function (req, res) {
   res.sendFile(__dirname + '/client/eleves.html');
});

app.get('/api/liste', function (req, res) {
   console.log('on me demande la liste');	
   res.json(toReturn);
});

app.get('/api/eleves', function (req, res) {
   res.json(listeEleves.listeEleves);
});


app.listen(9999, function () {
	  console.log('serveur lancé');
});



