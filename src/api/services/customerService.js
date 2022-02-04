const { locator, tenant} = require('../../database/models');

const create = async (body) => {
  const { 
    customerType,
    fullName: full_name,
    cpf,
    email
  } = body;

  let newCustomer = null;

  if (customerType === 'locator') {
    newCustomer = await locator.create({ full_name, cpf, email });
  } else {
    newCustomer = await tenant.create({ full_name, cpf, email });
  }

  return newCustomer;
};

const getByCpfOrEmail = async (cpf, email, customerType) => {

  let customer = null;

  if (customerType === 'locator') {
    customer = await locator.findOne({ where: { cpf }, where: { email} });
  } else {
    customer = await tenant.findOne({ where: { cpf }, where: { email} });
  }

  return customer;
};

const updateById = async (id, body) => {
  const { 
    customerType,
    fullName: full_name,
    cpf,
    email
  } = body;

  let updatedCustomer = null;

  if (customerType === 'locator') {
    updatedCustomer = await locator.update({ full_name, cpf, email }, { where: { id } });
  } else {
    updatedCustomer = await tenant.update({ full_name, cpf, email }, { where: { id } });
  }

  return updatedCustomer;

}

const deleteById = async (customerType, id) => {

  if (customerType === 'locator') {
    await locator.destroy({ where: { id } });
  } else {
    await tenant.destroy({ where: { id } });
  }

}

const getAll = async (customerType) => {
  let customers = null;

  if (customerType === 'locator') {
    customers = await locator.findAll({});
  } else {
    customers = await tenant.findAll({});
  }

  return customers;
};

const getById = async (customerType, id) => {
  let customer = null;

  if (customerType === 'locator') {
    customer = await locator.findOne({ where: { id } });
  } else {
    customer = await tenant.findOne({ where: { id } });
  }

  return customer;
};


module.exports = {
  create,
  getByCpfOrEmail,
  getAll,
  getById,
  updateById,
  deleteById,
};