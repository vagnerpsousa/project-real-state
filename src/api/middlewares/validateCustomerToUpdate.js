const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');

const cpfSize = 11;
const minFullName = 3;


const schema = Joi.object({
  fullName: Joi.string().min(minFullName).required(),
  cpf: Joi.string().length(cpfSize).required(),
  email: Joi.string().required().email(),
  customerType: Joi.string().required().equal('locator', 'tenant'),
});

module.exports = async (req, res, next) => {
  const { fullName } = req.body;
  const { error } = schema.validate(req.body);

  if (error) return next(error);

  const arrayName = fullName.split(' ');

  if (arrayName.length < 2) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Inform the full name'
    });
  }

  next();
};
