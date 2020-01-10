const { body } = require('express-validator')

exports.validate = (method) => {
	switch (method) {
		case 'createOrder': {
			return [ 
			body('Distance', "Distance is required & should be a number").exists().isInt(),
			body('CustomerId', "CustomerId is missing").exists().isInt(),
			body('CustomPizzas', "No pizzas included in order").exists().isArray({min: 1})
			]
		}
	}
}

exports.Order = {}
