var Amenities = require("../models/admin").Amenities;

function getAmenities(req, res) {
	Amenities.find(function(err, amenities){
		if(err){
			res.send(err);
		} else {
			res.send(amenities);
		}
	});
/*console.log("amenities request");
res.send("jasfhjsf");*/
};

function saveAmenities(req, res) {
	var amanity = new Amenities({
		type : req.body.type,
		enabled : req.body.enabled
	});
	console.log(req.body);
	amanity.save(function(err, model){
		if(err){
			res.send(err);
		} else {
			console.log(model);
			res.send(model);
		}
	})
};
function updateAmenities(req, res){
	var u_obj = {
		type : req.body.type,
		enabled : req.body.enabled
	}
	console.log(req.body);
	Amenities.update({_id:req.body._id}, {$set:u_obj}, function(err){
		if(err){
			res.send(err);
		} else {
			res.send("updated successfully");
		}
	})
};

function removeAmenity(req, res){
	console.log(req);
	Amenities.findByIdAndRemove(req.body._id, function(err){
		err?res.send(err):res.send("item removed");
	});
}

module.exports = {
	getAmenities 	: getAmenities,
	saveAmenities 	: saveAmenities,
	updateAmenities : updateAmenities,
	removeAmenity	: removeAmenity
}