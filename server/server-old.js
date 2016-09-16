// set up ======================================================================
var express = require('express');
var path = require('path');

//var favicon = require('serve-favicon');
var winston = require('winston');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');


var app = express();



// configuration ===============================================================
//app.use(favicon(__dirname + '/src/favicon.ico'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(express.static('./src'));                 // set the static files location /public/img will be /img for users



// routes ======================================================================
require('./routers.js')(app);


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




// listen (start app with node server.js) ======================================
app.listen(80);
console.log("App listening on port 80");
