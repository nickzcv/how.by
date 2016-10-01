var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContractorSchema   = new Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: String,
	avatar: String,
	status: String,
	location: String,
	meta: {
		age: Number,
		website: String,
		email: String,
		phone: String
	},
	created_at: Date,
	updated_at: Date
});

module.exports = mongoose.model('Contractor', ContractorSchema);