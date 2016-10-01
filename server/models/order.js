var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OrderSchema   = new Schema({
	title: { type: String, required: true, unique: true },
	category: { type: String, required: true },
	description: { type: String, required: true },
	img: String,
	status: 'DRAFT',
	location: String,
	created_at: Date,
	updated_at: Date
});

module.exports = mongoose.model('Order', OrderSchema);