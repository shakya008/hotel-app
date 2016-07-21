// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  f_name: String,
  l_name: String,
  email: { type: String, required: true, unique: true },
  passwd: { type: String, required: true },
  c_passwd : {type:String, required:true},
  created_at: Date,
  updated_at: Date
});

/*
*
*/
userSchema.static.findByEmail = function(email, cb) {
  return this.find({email:new RegExp(name, 'i') }, cb)
};
userSchema.static.queryRegisteredOwner = function(data, cb) {
  return this.find(cb);
}


// the schema is useless so far
// we need to create a model using it
var Registration = mongoose.model('Registration', userSchema);

// make this available to our users in our Node applications
module.exports = Registration;