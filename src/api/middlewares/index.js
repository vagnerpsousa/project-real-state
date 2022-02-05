const error = require('./error');
const validateCustomerToCreate = require('./validateCustomerToCreate');
const validateCustomerToUpdate = require('./validateCustomerToUpdate')
const doesCustomerExists = require('./doesCustomerExists');
const validateImmobileToCreate = require('./validateImmobileToCreate');
const doesImmobileExists = require('./doesImmobileExists');
const validateImmobileToUpdate = require('./validateImmobileToUpdate');

module.exports = {
    error,
    validateCustomerToCreate,
    validateCustomerToUpdate,
    doesCustomerExists,
    validateCustomerToCreate,
    validateImmobileToCreate,
    doesImmobileExists,
    validateImmobileToUpdate,
};