var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OrderSchema   = new Schema({
	customer_id: { type: Schema.Types.ObjectId  },
	category_id: { type: Schema.Types.ObjectId, required: true },
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	img: String,
	status: String,
	location: String,
	created_at: Date,
	updated_at: Date
});

module.exports = mongoose.model('Order', OrderSchema);