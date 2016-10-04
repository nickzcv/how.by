// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port       = process.env.PORT || 80;
var path 	   = require('path');
var bodyParser = require('body-parser');
var favicon    = require('serve-favicon');
var winston    = require('winston');
var mongoose   = require('mongoose');

mongoose.connect('localhost:27017/how_by'); // connect to our database


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  __dirname == /server
// set the static files location /src/css will be /css for users
app.use(express.static(path.join(__dirname, '../app/index/')));


// serve favicon
app.use(favicon(path.join(__dirname, '../app/index/images/favicons/favicon.ico')));


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


// ROUTES FOR OUR API
// =============================================================================
var customers = require(path.join(__dirname, 'api/customers'));
var contractors = require(path.join(__dirname, 'api/contractors'));
var orders = require(path.join(__dirname, 'api/orders'));


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', customers);
app.use('/api', contractors);
app.use('/api', orders);


// Handle 404 (page not found).
app.use(function (req, res) {
	res
		.status(404)
		// index for a while
		.sendFile(path.join(__dirname, '../app/index/index.html'));
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('How.by run on port: ' + port);