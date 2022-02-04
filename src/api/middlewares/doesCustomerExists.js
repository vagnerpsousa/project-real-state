const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/customerService');

module.exports = async (req, _res, next) => {
  const { customerType } = req.body;

  const customer = await customerService.getById(customerType, req.params.id);
  
  if (!customer) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Customer does not exist',
    });
  };

  next();
};
