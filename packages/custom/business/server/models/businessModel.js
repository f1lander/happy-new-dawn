var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var businessSchema = new Schema({

module.exports = mongoose.model('business', businessSchema);