var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var businessSchema = new Schema({	'name' : String,	'description' : String,	'address' : String});

module.exports = mongoose.model('business', businessSchema);
