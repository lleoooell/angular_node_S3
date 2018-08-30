var mongoose = require('mongoose');
var elevesImport = require('./data/data');
var Eleves = require('./models/eleves.model');

mongoose.connect('mongodb://localhost/ifas3');



var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('db connected');
    console.log(elevesImport);
    elevesImport.listeEleves.forEach(function(eleve){
    	// console.log(eleve);
    	var toSave = new Eleves(eleve);
    	console.log(toSave);
    	toSave.save(function(err, eleveSaved){
    		if(err){
    			console.log(err);
    		}else{
    			console.log("eleve saved");
    			console.log(eleveSaved);
    		}
    	});
    })
});