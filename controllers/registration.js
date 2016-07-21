var registrationSchema = require("../models/registration");
//var schema = mangoose.model('Registration');
function registerOwner (req, res) {
	console.log("got the request");
	var newSchema = new registrationSchema(req.body);
	newSchema.save(function(err, model) {
		console.log(model);
		if(err){
			console.log(err);
		} else {
			console.log("stored in db successfully!!");
		}
	});
	console.log(req.body);
	//res.send(req.body);
	res.send('Got a POST request');
};

function getRegisteredOwner(req, res) {
	var searchParam = {};
	//console.log(req.query);
	registrationSchema.find(req.query,function(err, users){
		if(err){
			console.log(err);
		} else {
			console.log(users);
			res.send(users);
		}
	});
}

module.exports = {
	registerOwner : registerOwner,
	getRegisteredOwner : getRegisteredOwner
};