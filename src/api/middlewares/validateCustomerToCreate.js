const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/customerService');

const cpfSize = 11;
const minFullName = 3;


const schema = Joi.object({
  fullName: Joi.string().min(minFullName).required(),
  cpf: Joi.string().length(cpfSize).required(),
  email: Joi.string().required().email(),
  customerType: Joi.string().required().equal('locator', 'tenant'),
});

module.exports = async (req, res, next) => {
  const { fullName, cpf, email, customerType } = req.body;

  const { error } = schema.validate(req.body);
  if (error) return next(error);

  const arrayName = fullName.split(' ');
  
  if (arrayName.length < 2) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Inform the full name'
    });
  }

  let customerExists = await customerService.getByCpfOrEmail(cpf, customerType);

  customerExists = await customerService.getByCpfOrEmail(email, customerType);

  if (customerExists) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Customer is already registered'
    });
  }

  next();
};
