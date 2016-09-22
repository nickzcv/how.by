// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var port       = process.env.PORT || 80;
var path 	   = require('path');
var bodyParser = require('body-parser');
var winston    = require('winston');
var mongoose   = require('mongoose');

mongoose.connect('localhost:27017/how_by'); // connect to our database


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



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


app.use(express.static(path.join(__dirname, '../app/src/')));                 // set the static files location /src/css will be /css for users

// ROUTES FOR OUR API
// =============================================================================
var customers = require('./api/customers');


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', customers);


app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname)); // load the single view file (angular will handle the page changes on the front-end)
});


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('How.by run on port: ' + port);