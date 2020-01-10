const User = require('../models/order')
const validator = require("Email-validator");
const { check, validationResult } = require('express-validator');

exports.createOrder = async (req, res, next) => {
 try {
      const errors = validationResult(req); // Finds the validation errors in this request

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const { Distance, CustomerId, CustomPizzas } = req.body

      if (Distance && CustomerId && CustomPizzas ) { 

        const order = {
          Distance,
          CustomerId,
          CustomPizzas
        }

        res.order = order;
        next();
      }
    } catch(err) {
     return next(err)
   }
 }