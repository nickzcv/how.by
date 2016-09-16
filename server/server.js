// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/api'); // connect to our database

//Define mongoose Schema
var Customer = require('../app/models/customer');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'How are you? welcome to our api!' });
});

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/customer')

// create a Customer (accessed at POST http://localhost:8080/api/customer)
	.post(function(req, res) {

		var customer = new Customer();

		customer.login = req.body.login;
		customer.password = req.body.password;
		customer.name = req.body.name;
		customer.phone = req.body.phone;
		customer.registrationDate = new Date();

		// save the bear and check for errors
		customer.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Customer created!' });
		});

	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('How.by fire on port: ' + port);