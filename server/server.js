// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var winston    = require('winston');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 80;        // set our port

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/api'); // connect to our database

//Define mongoose Schema
var Customer = require('../app/models/customer');

// Set up a logger.
app.locals.logger = new winston.Logger();
app.locals.logger.add(winston.transports.Console, {
	colorize: true
});

// Log every request.
app.use(function (req, res, next) {
	req.app.locals.logger.info('[' + req.method + ']', req.url);
	next();
});


app.use(express.static('./app/src'));                 // set the static files location /src/img will be /img for users




// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'How are you? welcome to our api!' });
});

// on routes that end in /customers
// ----------------------------------------------------
router.route('/customers')

// create a Customer (accessed at POST http://localhost:8080/api/customer)
	.post(function(req, res) {

		var customer = new Customer();

		customer.name = req.body.name;
		customer.username = req.body.username;
		customer.password = req.body.password;
		customer.status = 'NEW';
		customer.location = req.body.location;
		customer.meta.age = req.body.age;
		customer.meta.website = req.body.website;
		customer.meta.email = req.body.email;
		customer.meta.phone = req.body.phone;
		customer.created_at = new Date();
		customer.updated_at = new Date();

		// save the customer and check for errors
		customer.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Customer created!' });
		});

	})

	// get all the customers (accessed at GET http://localhost:8080/api/customer)
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

// get the customer with that id (accessed at GET http://localhost:8080/api/customers/:customer_id)
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

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.get('*', function (req, res) {
	res.sendfile('./src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('How.by fire on port: ' + port);