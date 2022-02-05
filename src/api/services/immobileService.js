const { immobile, address, finality, property_type, locator, tenant } = require('../../database/models');
const customerService = require('./customerService');

const create = async (body, addressData) => {
  const {
    logradouro: street,
    bairro: neighborhood,
    localidade: city,
    uf: state,
    cep,
  } = addressData;

  const newAddress = await address.create({
    street,
    number: body.number,
    complement: body.complement,
    neighborhood,
    city,
    state,
    cep,
  });  

  const {
    propertyTypeName: type_name,
    finaltyName: finality_name,
    bedrooms,
    bathrooms,
    parkingSpaces: parking_spaces,
    area,
    condominium,
    price,
    availability,
    description,
    locatorCpfOrEmail,
  } = body

  const propertyTypeData = await property_type.findOne({ where: { type_name } });
  const property_type_id = propertyTypeData.dataValues.id;
  const finalityData = await finality.findOne({ where: { finality_name } });
  const finality_id = finalityData.dataValues.id;
  const address_id = newAddress.id;
  const locatorData = await customerService.getByCpfOrEmail(locatorCpfOrEmail, 'locator');
  const locator_id = locatorData.dataValues.id;
  const tenant_id = 1;
  console.log(locator_id)
  console.log(finality_id)
  const newImmobile = await immobile.create({
    property_type_id,
    finality_id,
    bedrooms,
    bathrooms,
    parking_spaces,
    area,
    condominium,
    price,
    address_id,
    availability,
    description,
    locator_id,
    tenant_id
  });

  return newImmobile;
};

const getAll = async () => {

  const immobiles = await immobile.findAll();

  return immobiles;
};

const getById = async (id) => {

  const immobileById = await immobile.findByPk( id );

  return immobileById;

};

const updateById = async (id, body, addressData) => {
  
  const {
    logradouro: street,
    bairro: neighborhood,
    localidade: city,
    uf: state,
    cep,
  } = addressData;

  const oldImmobile = await immobile.findOne({ where: { id } });
  const oldAddressId = oldImmobile.address_id;

  const updatedAddress = await address.update({
    street,
    number: body.number,
    complement: body.complement,
    neighborhood,
    city,
    state,
    cep,
  }, { where: { id: oldAddressId } });

  const {
    propertyTypeName: type_name,
    finaltyName: finality_name,
    bedrooms,
    bathrooms,
    parkingSpaces: parking_spaces,
    area,
    condominium,
    price,
    availability,
    description,
    locatorCpfOrEmail,
    tenantCpfOrEmail
  } = body

  const propertyTypeData = await property_type.findOne({ where: { type_name } });
  const property_type_id = propertyTypeData.dataValues.id;
  const finalityData = await finality.findOne({ where: { finality_name } });
  const finality_id = finalityData.dataValues.id;
  const address_id = updatedAddress.id;
  const locatorData = await customerService.getByCpfOrEmail(locatorCpfOrEmail, 'locator');
  const locator_id = locatorData.dataValues.id;
  const tenantData = await customerService.getByCpfOrEmail(locatorCpfOrEmail, 'locator');
  const tenant_id = tenantData.dataValues.id;
  const updatedImmobile = await immobile.update({
    property_type_id,
    finality_id,
    bedrooms,
    bathrooms,
    parking_spaces,
    area,
    condominium,
    price,
    address_id,
    availability,
    description,
    locator_id,
    tenant_id
  }, { where: { id } });

  return updatedImmobile;
};

const deleteById = async (id) => {
  const immobileData = await immobile.findOne({ where: { id } });
  const addressId = immobileData.address_id;

  await address.destroy({ where: { id: addressId } });

  await immobile.destroy({ where: { id } });
}


module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};