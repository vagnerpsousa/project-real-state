const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const customerService = require('../services/customerService');
const { validateCustomerToCreate, validateCustomerToUpdate, doesCustomerExists } = require('../middlewares');


router.post('/', validateCustomerToCreate, async (req, res, next) => {
  try {

    const customer = await customerService.create(req.body);

    res.status(StatusCodes.CREATED).json(customer);

  } catch (error) {

    next(error)

  }
});

router.get('/', async (req, res, next) => {
  const customers = await customerService.getAll(req.body.customerType);

  if (customers.length === 0) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'No customer registrations',
    });
  }

  return res.status(StatusCodes.OK).json(customers);

});

router.get('/:id', doesCustomerExists, async (req, res, _next) => {

  const customer = await customerService.getById(req.body.customerType, req.params.id);

  return res.status(StatusCodes.OK).json(customer);
});

router.put('/:id', doesCustomerExists, validateCustomerToUpdate, async (req, res, _next) => {
  const { id } = req.params;

  const updatedCustomer = await customerService.updateById(id, req.body);

  return res.status(StatusCodes.OK).json(updatedCustomer);
});

router.delete('/:id', doesCustomerExists, async (req, res, _next) => {

  await customerService.deleteById(req.body.customerType, req.params.id);

  return res.status(StatusCodes.NO_CONTENT).json({ message: 'Customer was deleted' });
});



module.exports = router;