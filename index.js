var express = require('express');
var app = express();
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

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/client/index.html')
});
app.get('/card.html', function (req, res) {
   res.sendFile(__dirname + '/client/card.html')
});

app.get('/liste', function (req, res) {
   res.json(toReturn);
});

app.listen(9999, function () {
	  console.log('serveur lancé');
});



