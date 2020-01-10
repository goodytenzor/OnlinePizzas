const { body } = require('express-validator')

exports.validate = (method) => {
	switch (method) {
		case 'createUser': {
			return [ 
			body('FullName', "User's FullName is missing").exists(),
			body('Email', 'Invalid Email').exists().isEmail(),
			body('Password').exists().isAlphanumeric()
			]   
		}
	}
}

exports.User = {}