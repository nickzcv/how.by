var express = require('express');
var router = express.Router();              // get an instance of the express Router

//Define mongoose Schema
var Contractor = require('../../app/models/contractor');



// on routes that end in /contractors
// ----------------------------------------------------
router.route('/contractors')

// create a Contractor
	.post(function(req, res) {

		var contractor = new Contractor();

		contractor.username = req.body.username;
		contractor.password = req.body.password;
		contractor.name = req.body.name;
		contractor.avatar= req.body.avatar;
		contractor.status = 'NEW';
		contractor.location = req.body.location;
		contractor.meta.age = req.body.age;
		contractor.meta.website = req.body.website;
		contractor.meta.email = req.body.email;
		contractor.meta.phone = req.body.phone;
		contractor.created_at = new Date();
		contractor.updated_at = new Date();

		// save the contractor and check for errors
		contractor.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Contractor created!' });
		});

	})

	// get all the contractors
	.get(function(req, res) {

		Contractor.find(function(err, contractor) {
			if (err)
				res.send(err);

			res.json(contractor);

		});
	});

// on routes that end in /contractors/:contractor_id
// ----------------------------------------------------
router.route('/contractors/:contractor_id')

// get the contractor with :contractor_id
	.get(function(req, res) {
		Contractor.findById(req.params.contractor_id, function(err, contractor) {
			if (err)
				res.send(err);

			res.json(contractor);
		});
	})
	// update
	.put(function(req, res) {
		Contractor.findById(req.params.contractor_id, function(err, contractor) {

			if (err)
				res.send(err);

			contractor.name = req.body.name;
			contractor.location = req.body.location;
			contractor.meta.age = req.body.age;
			contractor.meta.website = req.body.website;
			contractor.meta.email = req.body.email;
			contractor.meta.phone = req.body.phone;
			contractor.updated_at = new Date();

			contractor.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Contractor updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		Contractor.remove({
			_id: req.params.contractor_id
		}, function(err, contractor) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});



module.exports = router;