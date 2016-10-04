var express = require('express');
var router = express.Router();              // get an instance of the express Router

//Define mongoose Schema
var Customer = require('../models/customer');



// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'How are you? welcome to HOW api!' });
});

// on routes that end in /customers
// ----------------------------------------------------
router.route('/customers')

// create a Customer (accessed at POST /api/customers)
	.post(function(req, res) {

		var customer = new Customer();
		
		customer.username = req.body.username;
		customer.password = req.body.password;
		customer.name = req.body.name;
		customer.avatar= req.body.avatar;
		customer.status = 'NEW';
		customer.location = req.body.location;
		customer.meta.age = req.body.age;
		customer.meta.website = req.body.website;
		customer.meta.email = req.body.email;
		customer.meta.phone = req.body.phone;
		customer.isActive = false;
		customer.created_at = new Date();
		customer.updated_at = new Date();
		customer.notes = '';

		// save the customer and check for errors
		customer.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Customer created!' });
		});

	})

	// get all the customers (accessed at GET /api/customers)
	.get(function(req, res) {

		Customer.find(function(err, customer) {
			if (err)
				res.send(err);

			res.json(customer);

		});
	});

// on routes that end in /customers/:customer_id
// ----------------------------------------------------
router.route('/customers/:customer_id')

// get the customer with :customer_id
	.get(function(req, res) {
		Customer.findById(req.params.customer_id, function(err, customer) {
			if (err)
				res.send(err);

			res.json(customer);
		});
	})
	// update
	.put(function(req, res) {
		Customer.findById(req.params.customer_id, function(err, customer) {

			if (err)
				res.send(err);

			customer.name = req.body.name;
			customer.location = req.body.location;
			customer.meta.age = req.body.age;
			customer.meta.website = req.body.website;
			customer.meta.email = req.body.email;
			customer.meta.phone = req.body.phone;
			customer.updated_at = new Date();

			customer.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Customer updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		Customer.remove({
			_id: req.params.customer_id
		}, function(err, customer) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});



module.exports = router;