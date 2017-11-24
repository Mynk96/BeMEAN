var express = require('express');

var app = express();
var mongojs = require('mongojs');
var db = mongojs('studentDetails', ['studentDetails']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/data', function (req, res) {
	db.studentDetails.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/studentDetails', function(req, res) {
	console.log(req.body);
	db.studentDetails.insert(req.body, function(err, doc){
		res.sendStatus(200);
		console.log('Data successfully added');
	});
});
app.listen(3000);