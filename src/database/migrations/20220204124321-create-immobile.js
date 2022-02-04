'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('immobiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      property_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      finality_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bedrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      parking_spaces: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      area: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      condominium: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },
      address_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      availability: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      locator_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tenant_id: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('immobiles');
  }
};