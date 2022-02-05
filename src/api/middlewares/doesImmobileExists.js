const { StatusCodes } = require('http-status-codes');
const immobileService = require('../services/immobileService');

module.exports = async (req, _res, next) => {

  const immobileExists = await immobileService.getById(req.params.id);
  
  if (!immobileExists) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Immobile does not exist',
    });
  };

  next();
};
