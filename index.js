var express = require('express');
var listeEleves = require('./data/data');
var bodyParser = require('body-parser');


var app = express();


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

// app.use == configuration du server
// je déclare mes fichiers statiques
app.use('/js', express.static('./client/js'));
app.use('/css', express.static('./client/css'));
// je configure mon body parser :
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 


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

app.get('/login', function (req, res) {
   res.sendFile(__dirname + '/client/login.html');
});
app.post('/api/login', function (req, res) {
   console.log("req.body");
   console.log(req.body);

   console.log("mon prenom : " + req.body.prenom);
   console.log("mon mail : " + req.body.mail);
   console.log("mon commentaire : " + req.body.commentaire);
   res.sendStatus(200);
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



