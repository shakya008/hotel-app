// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var amenitiesSchema = new Schema({
  type: String,
  enabled : Boolean,
  created_at: Date,
  updated_at: Date
});

var nearBySchema = new Schema({
  location : String,
  distance : Number
})

// the schema is useless so far
// we need to create a model using it
var Amenities = mongoose.model('Amenities', amenitiesSchema);
var NearBy = mongoose.model('NearBy', nearBySchema);

// make this available to our users in our Node applications
module.exports = {
  Amenities : Amenities,
  NearBy : NearBy
};