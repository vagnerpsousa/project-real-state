const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/customerService');
const addressSearchApi = require('../utils/addressSearchApi');

const schema = Joi.object({
  propertyTypeName: Joi.string().required().equal('casa', 'apartamento', 'loja'),
  finaltyName: Joi.string().required().equal('aluguel', 'compra'),
  bedrooms: Joi.number().required().positive(),
  bathrooms: Joi.number().required().positive(),
  parkingSpaces: Joi.number().required().positive(),
  area: Joi.number().required().positive(),
  condominium: Joi.number().required().min(0),
  price: Joi.number().required().positive(),
  availability: Joi.string().required().equal('disponivel', 'indisponivel'),
  description: Joi.string().required(),
  locatorCpfOrEmail: Joi.string().required(),
  cep: Joi.number().required(),
  number: Joi.string().required(),
  complement: Joi.string().required(),
});

module.exports = async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return next(error);
  
  const locatorExists = await customerService.getByCpfOrEmail(req.body.locatorCpfOrEmail, 'locator');
  if (!locatorExists) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Locator does not exist'
    });
  };

  const addressExists = await addressSearchApi(req.body.cep);
  if (!addressExists) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Address does not exist'
    });
  };

  next();
};