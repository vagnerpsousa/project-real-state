const express = require('express');
const { StatusCodes } = require('http-status-codes');
const router = express.Router();
const immobileService = require('../services/immobileService');
const { validateImmobileToCreate, doesImmobileExists, validateImmobileToUpdate } = require('../middlewares');
const addressSearchApi = require('../utils/addressSearchApi');


router.post('/', validateImmobileToCreate, async (req, res, next) => {
  try {
    const address = await addressSearchApi(req.body.cep);

    const newImmobile = await immobileService.create(req.body, address);

    res.status(StatusCodes.CREATED).json(newImmobile);

  } catch (error) {

    next(error)

  }
});

router.get('/', async (req, res, next) => {
  const immobiles = await immobileService.getAll();

  if (immobiles.length === 0) {
    return next({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'No immobile registrations',
    });
  }

  return res.status(StatusCodes.OK).json(immobiles);

});

router.get('/:id', doesImmobileExists, async (req, res, _next) => {

  const immobileData = await immobileService.getById(req.params.id);

  return res.status(StatusCodes.OK).json(immobileData);
});

router.put('/:id', validateImmobileToCreate, async (req, res, _next) => {
  const { id } = req.params;

  const addressData = await addressSearchApi(req.body.cep);

  const updatedImmobile = await immobileService.updateById(id, req.body, addressData);

  return res.status(StatusCodes.OK).json(updatedImmobile);
});

router.delete('/:id', doesImmobileExists, async (req, res, _next) => {

  await immobileService.deleteById( req.params.id );

  return res.status(StatusCodes.NO_CONTENT).json({ message: 'Immobile was deleted' });
});



module.exports = router;