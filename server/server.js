const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const request = require('request');
const rp = require('request-promise');
const expressValidator = require('express-validator')

const config = require('./config/config')
const orderModel = require('./models/order')
const orderController = require('./controllers/orderController')

const port = process.env.PORT || 3100;
const app = express();

app.listen(port, () => {
	console.log('Express is listening on port: ' + port);
})

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use(cookieParser());

// CORS

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


//******************* Pizza Orders ********************* //

// Add a new order to the DB
app.post('/api/addOrder', 
	(req, res) =>{
		console.log("creating order ");
		console.log(req.body);

		var options = {
			method: 'POST',
			uri: config.orderEndPoint + '/CreateOrder',
			body: req.body,
			json: true
		};

		rp(options)
		.then(function (parsedBody) {
			res.send(parsedBody);
		})
		.catch(function (err) {
			res.send(err);
		});
	});

// Get the price for the items selected so far
app.post('/api/getPriceForOrder', 
	(req, res) =>{

		var options = {
			method: 'POST',
			uri: config.orderEndPoint + '/GetPriceQuote',
			body: req.body,
			json: true
		};

		rp(options)
		.then(function (parsedBody) {
			res.send(parsedBody);
		})
		.catch(function (err) {
			res.send(err);
		});
	});


// Get all orders
app.get('/api/getAllOrders', (req, res) =>{

	var options = {
		uri: config.orderEndPoint + '/GetAllOrders',
		qs: {
			id: req.query.id
		},
		headers: {
			'User-Agent': 'Request-Promise'
		},
		json: true
	};

	rp(options)
	.then(function (order) {
		res.send(order);
	})
	.catch(function (err) {
		res.send(err);
	});

});