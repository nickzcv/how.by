var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategorySchema   = new Schema({
	title: { type: String, required: true},
	slug: { type: String, required: true, unique: true },
	description:  String,
	img: String
});

module.exports = mongoose.model('Category', CategorySchema);