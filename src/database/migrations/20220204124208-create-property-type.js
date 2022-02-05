'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('property_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('property_types');
  }
};