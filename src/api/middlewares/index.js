const error = require('./error');
const validateCustomerToCreate = require('./validateCustomerToCreate');
const validateCustomerToUpdate = require('./validateCustomerToUpdate')
const doesCustomerExists = require('./doesCustomerExists');

module.exports = {
    error,
    validateCustomerToCreate,
    validateCustomerToUpdate,
    doesCustomerExists
};